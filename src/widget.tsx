import {
  DOMWidgetModel, DOMWidgetView, ISerializers
} from '@jupyter-widgets/base';

import {
  MODULE_NAME, MODULE_VERSION
} from './version';

// Import the CSS
import '../css/widget.css'
// import 'bootstrap/dist/css/bootstrap.min.css';

import * as React from "react";
import * as ReactDOM from "react-dom";
import _ from 'lodash';
import {Tabs,Tab, Alert} from 'react-bootstrap';
// import Alert from 'react-bootstrap';
// import { useAlert } from "react-alert";
// import TabComponent from './tab';
import ChartGalleryComponent from './chartGallery';
import CurrentVisComponent from './currentVis';
// import { utils } from 'mocha';
// import { EventEmitter } from 'events';
import {dispatchLogEvent} from './utils';
export class ExampleModel extends DOMWidgetModel {
  defaults() {
    return {...super.defaults(),
      _model_name: ExampleModel.model_name,
      _model_module: ExampleModel.model_module,
      _model_module_version: ExampleModel.model_module_version,
      _view_name: ExampleModel.view_name,
      _view_module: ExampleModel.view_module,
      value : 'Hello World'
    };
  }

  static serializers: ISerializers = {
      ...DOMWidgetModel.serializers,
      // Add any extra serializers here
    }

  static model_name = 'ExampleModel';
  static model_module = MODULE_NAME;
  static model_module_version = MODULE_VERSION;
  static view_name = 'JupyterWidgetView';   // Set to null if no view
  static view_module = MODULE_NAME;   // Set to null if no view
  
}

export class JupyterWidgetView extends DOMWidgetView {

  initialize(){    
    let view = this;
    interface WidgetProps{
      currentVis:object,
      recommendations:any[],
      intent:string,
      message:string,
      tabItems: any,
      activeTab:any,
      showAlert:boolean,
      selectedRec:object,
      _exportedVisIdxs:object,
      currentVisSelected:number,
      openWarning: boolean,
    }

    class ReactWidget extends React.Component<JupyterWidgetView,WidgetProps> {
      constructor(props:any){
        super(props);
        this.state = {
          currentVis :  props.model.get("current_vis"),
          recommendations:  props.model.get("recommendations"),
          intent:props.model.get("intent"),
          message:props.model.get("message"),
          tabItems: this.generateTabItems(),
          activeTab: props.activeTab,
          showAlert:false,
          selectedRec:{},
          _exportedVisIdxs:[],
          currentVisSelected: -2,
          openWarning:false
        }
        // This binding is necessary to make `this` work in the callback
        this.handleCurrentVisSelect = this.handleCurrentVisSelect.bind(this);
        this.handleSelect = this.handleSelect.bind(this);
        this.exportSelection = this.exportSelection.bind(this);
        this.openPanel = this.openPanel.bind(this);
        this.closePanel = this.closePanel.bind(this);
      }

      openPanel(e){
        this.setState({openWarning:true})
      }
      closePanel(e){
        this.setState({openWarning:false})
      }
  
      onChange(model:any){// called when the variable is changed in the view.model
        this.setState(model.changed);
      }

      componentDidMount(){ //triggered when component is mounted (i.e., when widget first rendered)
        view.listenTo(view.model,"change",this.onChange.bind(this));
      }

      componentDidUpdate(){ //triggered after component is updated
        view.model.save_changes(); // instead of touch (which leads to callback issues), we have to use save_changes
      }
  
      handleSelect(selectedTab) {
        // The active tab must be set into the state so that
        // the Tabs component knows about the change and re-renders.
        if (selectedTab){
          dispatchLogEvent("switchTab",selectedTab)
        }
        this.setState({
          activeTab: selectedTab
        });
      }

      handleCurrentVisSelect = (selectedValue) => {
        this.setState({ currentVisSelected: selectedValue }, () => {
          if (selectedValue == -1) {
            this.onListChanged(-1, null);
          } else {
            this.onListChanged(-2, null);
          }
        }); 
      }   

      onListChanged(tabIdx,selectedLst) {
        // Example _exportedVisIdxs : {'Correlation': [0, 2], 'Occurrence': [1]}
        var _exportedVisIdxs = {}
        this.state.selectedRec[tabIdx] = selectedLst // set selected elements as th selectedRec of this tab

          for (var tabID of Object.keys(this.state.selectedRec)){
            if (tabID in this.state.recommendations) {
              var actionName =  this.state.recommendations[tabID]["action"]
              if (this.state.selectedRec[tabID].length > 0) {
                _exportedVisIdxs[actionName] = this.state.selectedRec[tabID]
              }
            } else if (this.state.currentVisSelected == -1) {
              _exportedVisIdxs["currentVis"] = this.state.currentVis
            }
        }
        this.setState({
          _exportedVisIdxs: _exportedVisIdxs
        });
      }

      exportSelection() {
        dispatchLogEvent("exportBtnClick",this.state._exportedVisIdxs)
        this.setState(
          state => ({
            showAlert:true
        }));
        // Expire alert box in 1 minute
        setTimeout(()=>{
          this.setState(
                state => ({
                  showAlert:false
           }));
        },60000);
        view.model.set('_exportedVisIdxs',this.state._exportedVisIdxs);
      }

      generateTabItems() {
        return (
          this.props.model.get("recommendations").map((actionResult,tabIdx) =>
            <Tab eventKey={actionResult.action} title={actionResult.action} >
              <ChartGalleryComponent 
                  // this exists to prevent chart gallergy from refreshing while changing tabs
                  // This is an anti-pattern for React, but is necessary here because our chartgallery is very expensive to initialize
                  key={'no refresh'}
                  title={actionResult.action}
                  description={actionResult.description}
                  multiple={true}
                  maxSelectable={10}
                  onChange={this.onListChanged.bind(this,tabIdx)}
                  graphSpec={actionResult.vspec}
                  currentVisShow={!_.isEmpty(this.props.model.get("current_vis"))}/> 
            </Tab>
          )
        )
      }

      render(){
        let exportBtn;
        if (this.state.tabItems.length>0){
          exportBtn = <i  id="exportBtn" 
                          className='fa fa-upload' 
                          title='Export selected visualization into variable'
                          onClick={(e) => this.exportSelection()}/>
        }

        let alertBtn;
        if (this.state.showAlert){
          alertBtn= <Alert id="alertBox" 
                           key="infoAlert" 
                           variant="info" 
                           dismissible>
                      Access exported visualizations via the property `exported` (<a href="https://lux-api.readthedocs.io/en/latest/source/guide/export.html">More details</a>)
                    </Alert>
        }
        let warnBtn;
        let warnMsg;
        if (this.state.message!=""){
          warnBtn = <i  id="warnBtn" 
                          className='fa fa-exclamation-triangle'
                          onClick={(e)=>this.openPanel(e)}/>;
          warnMsg = <div className="warning-footer" style={{display: (this.state.openWarning) ? 'flex' : 'none' }} >
          <p className="warnMsgText" dangerouslySetInnerHTML={{__html: this.state.message}}></p> 
          <i className="fa fa-window-close" aria-hidden="true" onClick={(e)=>this.closePanel(e)}
          style={{position: 'absolute', right: '15px', fontSize: '15px' }}
          ></i> 
          </div>;
        }
        if (this.state.recommendations.length == 0) {
          return (<div id="oneViewWidgetContainer" style={{ flexDirection: 'column' }}>
                  {/* {attributeShelf}
                  {filterShelf} */}
                  <div style={{ display: 'flex', flexDirection: 'row' }}>
                    <CurrentVisComponent intent={this.state.intent} currentVisSpec={this.state.currentVis} numRecommendations={0}
                    onChange={this.handleCurrentVisSelect}/>
                    {exportBtn}
                    {alertBtn}
                  </div>               
                </div>);
        } else {
          return (<div id="widgetContainer" style={{ flexDirection: 'column' }}>
                    {/* {attributeShelf}
                    {filterShelf} */}
                    <div style={{ display: 'flex', flexDirection: 'row' }}>
                      <CurrentVisComponent intent={this.state.intent} currentVisSpec={this.state.currentVis} numRecommendations={this.state.recommendations.length}
                      onChange={this.handleCurrentVisSelect}/>
                      <div id="tabBanner">
                        <p className="title-description" style={{visibility: !_.isEmpty(this.state.currentVis) ? 'visible' : 'hidden' }}>You might be interested in...</p>
                        <Tabs activeKey={this.state.activeTab} id="tabBannerList" onSelect={this.handleSelect} className={!_.isEmpty(this.state.currentVis) ? "tabBannerPadding" : ""}>
                          {this.state.tabItems}
                        </Tabs>
                      </div>
                      {exportBtn}
                      {alertBtn}
                    </div>
                    {warnBtn}
                    {warnMsg}
                  </div>);
        }
      }
    }
    const $app = document.createElement("div");
    const App = React.createElement(ReactWidget,view);
    ReactDOM.render(App,$app); // Renders the app
    view.el.append($app); //attaches the rendered app to the DOM (both are required for the widget to show)
    dispatchLogEvent("initWidget","")
    $(".widget-button").on('click',function(event){
      var toPandas = (event.currentTarget.parentNode.parentNode.nextSibling as HTMLElement).querySelector("#widgetContainer") !=null 
      var toLux = (event.currentTarget.parentNode.parentNode.nextSibling as HTMLElement).querySelector(".dataframe")!=null
      var viewType;
      if (toLux){
        viewType = "lux"
      }else if (toPandas){
        viewType = "pandas"
      }
      dispatchLogEvent("toggleBtnClick",viewType)
      event.stopImmediatePropagation()
    })
  }
}
