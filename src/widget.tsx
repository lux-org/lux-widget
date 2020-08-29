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
      activeTab:any,
      showAlert:boolean,
      selectedRec:object,
      _exportedVisIdxs:object,
      intent:string,
      currentVisSelected:number,
    }

    class ReactWidget extends React.Component<JupyterWidgetView,WidgetProps> {
      constructor(props:any){
        super(props);
        this.state = {
          currentVis :  props.model.get("current_vis"),
          recommendations:  props.model.get("recommendations"),
          activeTab: props.activeTab,
          showAlert:false,
          selectedRec:{},
          _exportedVisIdxs:[],
          intent:props.model.get("intent"),
          currentVisSelected: -2,
        }
        // This binding is necessary to make `this` work in the callback
        this.handleCurrentVisSelect = this.handleCurrentVisSelect.bind(this);
        this.handleSelect = this.handleSelect.bind(this);
        this.exportSelection = this.exportSelection.bind(this);
      }
  
      onChange(model:any){// called when the variable is changed in the view.model
        this.setState(model.changed);
      }

      componentDidMount(){ //triggered when component is mounted (i.e., when widget first rendered)
        view.listenTo(view.model,"change",this.onChange.bind(this));
      }

      componentDidUpdate(){ //triggered after component is updated
        console.log("componentDidUpdate:",view.model.get("_exportedVisIdxs"));
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

      render(){
        const tabItems = this.state.recommendations.map((actionResult,tabIdx) =>
          <Tab eventKey={actionResult.action} title={actionResult.action} >
            <ChartGalleryComponent 
                // This prevents chart gallery from refreshing while changing tabs
                // This is an anti-pattern for React, but is necessary here because our chartgallery is very expensive to initialize
                key={'no refresh'}
                title={actionResult.action}
                description={actionResult.description}
                multiple={true}
                maxSelectable={10}
                onChange={this.onListChanged.bind(this,tabIdx)}
                graphSpec={actionResult.vspec}
                currentVisShow={!_.isEmpty(this.state.currentVis)}/> 
          </Tab>);

        let exportBtn;
        if (tabItems.length>0){
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

        // let attributeShelf = 
        //   <div style={{ display: 'flex', flexDirection: 'row' }}>
        //     <div style={{ width: '100%', border: 'solid 1px lightgray', borderRadius: '5px', marginBottom: '5px', minHeight: '30px', maxHeight: '30px', display: 'flex', flexDirection: 'row' }}>
        //       <div style={{ width: '100px', height: '100%', borderRight: 'solid 1px lightgray', paddingLeft: '10px', paddingRight: '10px', display: 'flex', flexDirection: 'row', backgroundColor: '#f7f7f7' }}>
        //         <i id="attributeIcon" 
        //           className='fa fa-th-list'
        //           style={{ marginTop: 'auto', marginBottom: 'auto', marginRight: '5px', minWidth: '15px' }}/>
        //         <p style={{ lineHeight: '28px' }}>Attribute</p>
        //       </div>
        //       <div style={{ height: '100%', display: 'flex' }}>

        //         {this.state.intent['attributes'].map((attribute) => {
        //           <div style={{ marginTop: '2px', marginBottom: '2px', marginLeft: '10px', border: 'solid 1px lightgray', borderRadius: '5px', display: 'flex', flexDirection: 'row', backgroundColor: '#f7f7f7' }}>
        //             <i id="attributeIcon" 
        //               className='fa fa-hashtag'
        //               style={{ marginTop: 'auto', marginBottom: 'auto', marginRight: '5px', marginLeft: '5px', minWidth: '15px' }}/>
        //             <p style={{ lineHeight: '22px' }}>{attribute}</p>
        //             <i id="attributeIcon" 
        //               className='fa fa-times-circle'
        //               style={{ marginTop: 'auto', marginBottom: 'auto', marginRight: '5px', marginLeft: '5px', minWidth: '15px' }}
        //               onClick={() => {}}/>
        //           </div>
        //         })}

        //       </div>
        //     </div>
        //     <i id="attributeIcon" 
        //       className='fa fa-bars'
        //       style={{ marginTop: 'auto', marginBottom: 'auto', marginLeft: '10px', marginRight: '5px', minWidth: '15px' }}/>
        //   </div>

        // let filterShelf = 
        //   <div style={{ display: 'flex', flexDirection: 'row' }}>
        //     <div style={{ width: '100%', border: 'solid 1px lightgray', borderRadius: '5px', marginBottom: '5px', minHeight: '30px' }}>
        //       <div style={{ width: '100px', height: '100%', borderRight: 'solid 1px lightgray', paddingLeft: '10px', paddingRight: '10px', display: 'flex', flexDirection: 'row', backgroundColor: '#f7f7f7' }}>
        //         <i id="attributeIcon" 
        //           className='fa fa-filter'
        //           style={{ marginTop: 'auto', marginBottom: 'auto', marginRight: '3px', marginLeft: '2px', minWidth: '15px' }}/>
        //         <p style={{ lineHeight: '28px' }}>Filter</p>
        //       </div>
        //       <div style={{ width: '100%' }}>

        //         {this.state.intent['filters'].map((filter) => {
        //           <div style={{ marginTop: '2px', marginBottom: '2px', marginLeft: '10px', border: 'solid 1px lightgray', borderRadius: '5px', display: 'flex', flexDirection: 'row', backgroundColor: '#f7f7f7' }}>
        //             <i id="attributeIcon" 
        //               className='fa fa-hashtag'
        //               style={{ marginTop: 'auto', marginBottom: 'auto', marginRight: '5px', marginLeft: '5px', minWidth: '15px' }}/>
        //             <p style={{ lineHeight: '22px' }}>{filter}</p>
        //             <i id="attributeIcon" 
        //               className='fa fa-times-circle'
        //               style={{ marginTop: 'auto', marginBottom: 'auto', marginRight: '5px', marginLeft: '5px', minWidth: '15px' }}
        //               onClick={() => {}}/>
        //           </div>
        //         })}

        //       </div>
        //     </div>
        //     <i id="attributeIcon" 
        //       className='fa fa-database'
        //       style={{ marginTop: 'auto', marginBottom: 'auto', marginLeft: '10px', marginRight: '5px', minWidth: '15px' }}/>
        //   </div>
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
                          {tabItems}
                        </Tabs>
                      </div>
                      {exportBtn}
                      {alertBtn}
                    </div>               
                  </div>);
        }
      }
    }
    const $app = document.createElement("div");
    const App = React.createElement(ReactWidget,view);
    ReactDOM.render(App,$app); // Renders the app
    view.el.append($app); //attaches the rendered app to the DOM (both are required for the widget to show)

    // console.log("initialize:",Date.now())
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
