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
import {Tabs,Tab} from 'react-bootstrap';
// import Alert from 'react-bootstrap';
// import { useAlert } from "react-alert";
// import TabComponent from './tab';
import ChartGalleryComponent from './chartGallery';
import CurrentVisComponent from './currentVis';
// import { utils } from 'mocha';
// import { EventEmitter } from 'events';
import {dispatchLogEvent} from './utils';
import ButtonsBroker from './buttonsBroker';
import WarningBtn from './warningBtn';

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
      intentIndex: object,
      message:string,
      tabItems: any,
      activeTab:any,
      showAlert:boolean,
      showIntentWarning: boolean,
      selectedRec:object,
      _exportedVisIdxs:object,
      deletedIndices:object,
      currentVisSelected:number,
      openWarning: boolean
    }

    class ReactWidget extends React.Component<JupyterWidgetView,WidgetProps> {
      private chartComponents = Array<any>();

      constructor(props:any){
        super(props);

        for (var i = 0; i < this.props.model.get("recommendations").length; i++) {
          this.chartComponents.push(React.createRef<ChartGalleryComponent>());
        }

        this.state = {
          currentVis :  props.model.get("current_vis"),
          recommendations:  props.model.get("recommendations"),
          intent:props.model.get("intent"),
          intentIndex: {},
          message:props.model.get("message"),
          tabItems: this.generateTabItems(),
          activeTab: props.activeTab,
          showAlert:false,
          showIntentWarning: false,
          selectedRec:{},
          _exportedVisIdxs:{},
          deletedIndices: {},
          currentVisSelected: -2,
          openWarning:false
        }

        // This binding is necessary to make `this` work in the callback
        this.handleCurrentVisSelect = this.handleCurrentVisSelect.bind(this);
        this.handleSelect = this.handleSelect.bind(this);
        this.exportSelection = this.exportSelection.bind(this);
        this.openPanel = this.openPanel.bind(this);
        this.closePanel = this.closePanel.bind(this);
        this.deleteSelection = this.deleteSelection.bind(this);
        this.setIntent = this.setIntent.bind(this);
        this.closeExportInfo = this.closeExportInfo.bind(this);
      }

      openPanel(e){
        this.setState({openWarning:true})
      }
      closePanel(e){
        this.setState({openWarning:false})
      }

      // called to close alert pop up upon export button hit by user
      closeExportInfo() {
        this.setState({
          showAlert: false,
          showIntentWarning: false});
      }
  
      // called when the variable is changed in the view.model
      onChange(model:any){
        this.setState(model.changed);
      }

      //triggered when component is mounted (i.e., when widget first rendered)
      componentDidMount(){ 
        view.listenTo(view.model,"change",this.onChange.bind(this));
      }

      //triggered after component is updated
      // instead of touch (which leads to callback issues), we have to use save_changes
      componentDidUpdate(){ 
        view.model.save_changes();
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
        dispatchLogEvent("exportBtnClick",this.state._exportedVisIdxs);
        this.setState(
          state => ({
            showIntentWarning: false,
            showAlert:true
        }));
        // Expire alert box in 1 minute
        setTimeout(()=>{
          this.setState(
                state => ({
                  showAlert:false
           }));
        },60000);

        view.model.set('_exportedVisIdxs', this.state._exportedVisIdxs);
        view.model.save();

      }

      /* 
       * Goes through all selections and removes and clears any selections across recommendation tabs.
       * Changing deletedIndices triggers an observer in the backend to update backend data structure.
       * Re-renders each tab's chart component, with the updated recommendations.
       */
      deleteSelection() {
        dispatchLogEvent("deleteBtnClick", this.state.deletedIndices);
        var currDeletions = this.state._exportedVisIdxs;

        // Deleting from the frontend's visualization data structure
        for (var recommendation of this.state.recommendations) {
          if (this.state._exportedVisIdxs[recommendation.action]) {
            let delCount = 0;
            for (var index of this.state._exportedVisIdxs[recommendation.action]) {
              recommendation.vspec.splice(index - delCount, 1);
              delCount++;
            }
          }
        }

        this.setState({
            selectedRec: {},
            _exportedVisIdxs: {},
            deletedIndices: currDeletions
        });

        // Re-render each tab's components to update deletions on front end
        for (var i = 0; i < this.props.model.get("recommendations").length; i++) {
          this.chartComponents[i].current.removeDeletedCharts();
        }

        view.model.set('deletedIndices', currDeletions);
        view.model.set('_exportedVisIdxs', {});
        view.model.save();
      }

      /* 
       * Set selected Vis as intent and re-renders widget to update to new view.
       * Shows warning if user tries to select more than one Vis card.
       */
      setIntent() {
        dispatchLogEvent("intentBtnClick", this.state.intentIndex);
        if (Object.keys(this.state._exportedVisIdxs).length == 1) {
          var action = Object.keys(this.state._exportedVisIdxs)[0];
            if (this.state._exportedVisIdxs[action].length == 1) {
              view.model.set('intentIndex', this.state._exportedVisIdxs);
              view.model.save();
              return;
          }
        }

        var seconds = 1000;

        this.setState(
          state => ({
            showAlert: false,
            showIntentWarning:true
        }));

        // Expire alert box in 7 seconds
        setTimeout(()=>{
          this.setState(
                state => ({
                  showIntentWarning:false
           }));
        }, 7*seconds);

      }

      generateTabItems() {
        return (
          this.props.model.get("recommendations").map((actionResult,tabIdx) =>
            <Tab eventKey={actionResult.action} title={actionResult.action} >
              <ChartGalleryComponent 
                  // this exists to prevent chart gallergy from refreshing while changing tabs
                  // This is an anti-pattern for React, but is necessary here because our chartgallery is very expensive to initialize
                  key={'no refresh'}
                  ref={this.chartComponents[tabIdx]}
                  title={actionResult.action}
                  description={actionResult.description}
                  multiple={true}
                  maxSelectable={10}
                  onChange={this.onListChanged.bind(this,tabIdx)}
                  graphSpec={actionResult.vspec}
                  currentVisShow={!_.isEmpty(this.props.model.get("current_vis"))}
                  /> 
            </Tab>
          )
        )
      }

      render() {
        var buttonsEnabled = Object.keys(this.state._exportedVisIdxs).length > 0;
        
        if (this.state.recommendations.length == 0) {
          return (<div id="oneViewWidgetContainer" style={{ flexDirection: 'column' }}>
                  {/* {attributeShelf}
                  {filterShelf} */}
                  <div style={{ display: 'flex', flexDirection: 'row' }}>
                    <CurrentVisComponent intent={this.state.intent} currentVisSpec={this.state.currentVis} numRecommendations={0}
                    onChange={this.handleCurrentVisSelect}/>
                  </div>
                  <ButtonsBroker buttonsEnabled={buttonsEnabled}
                                     deleteSelection={this.deleteSelection}
                                     exportSelection={this.exportSelection}
                                     setIntent={this.setIntent}
                                     closeExportInfo={this.closeExportInfo}
                                     tabItems={this.state.tabItems}
                                     showAlert={this.state.showAlert}
                                     showIntentWarning = {this.state.showIntentWarning}
                                     />               
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
                    </div>
                    <ButtonsBroker buttonsEnabled={buttonsEnabled}
                                     deleteSelection={this.deleteSelection}
                                     exportSelection={this.exportSelection}
                                     setIntent={this.setIntent}
                                     closeExportInfo={this.closeExportInfo}
                                     tabItems={this.state.tabItems}
                                     showAlert={this.state.showAlert}
                                     showIntentWarning = {this.state.showIntentWarning}
                                     />
                    <WarningBtn message={this.state.message} openPanel={this.openPanel} closePanel={this.closePanel} openWarning={this.state.openWarning} />
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
