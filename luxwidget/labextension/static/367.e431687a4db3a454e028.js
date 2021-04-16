(self.webpackChunkluxwidget=self.webpackChunkluxwidget||[]).push([[367],{974:function(e,t,n){"use strict";var r=this&&this.__createBinding||(Object.create?function(e,t,n,r){void 0===r&&(r=n),Object.defineProperty(e,r,{enumerable:!0,get:function(){return t[n]}})}:function(e,t,n,r){void 0===r&&(r=n),e[r]=t[n]}),i=this&&this.__setModuleDefault||(Object.create?function(e,t){Object.defineProperty(e,"default",{enumerable:!0,value:t})}:function(e,t){e.default=t}),s=this&&this.__importStar||function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)"default"!==n&&Object.prototype.hasOwnProperty.call(e,n)&&r(t,e,n);return i(t,e),t};Object.defineProperty(t,"__esModule",{value:!0});const o=s(n(6271)),a=n(8650);class l extends o.Component{constructor(e){super(e)}render(){const{buttonsEnabled:e,tabItems:t,deleteSelection:n,exportSelection:r,setIntent:i,closeExportInfo:s,showAlert:l,intentEnabled:c}=this.props;let d,p,u,h;return t.length>0&&(e?(d=o.default.createElement("i",{id:"deleteBtn",className:"fa fa-trash",title:"Delete selected visualizations",onClick:()=>n()}),p=o.default.createElement("i",{id:"exportBtn",className:"fa fa-upload",title:"Export selected visualizations into variable",onClick:e=>r()})):(d=o.default.createElement("i",{id:"deleteBtn",className:"fa fa-trash",style:{opacity:.2,cursor:"not-allowed"},title:"Select one or more visualizations to delete"}),p=o.default.createElement("i",{id:"exportBtn",className:"fa fa-upload",style:{opacity:.2,cursor:"not-allowed"},title:"Select one or more visualizations to export into variable"})),u=e&&c?o.default.createElement("i",{id:"intentBtn",className:"fa fa-search",title:"Set selected visualization as intent",onClick:()=>i()}):o.default.createElement("i",{id:"intentBtn",className:"fa fa-search",style:{opacity:.2,cursor:"not-allowed"},title:"Select no more than one visualization to set as intent"})),l&&(h=o.default.createElement(a.Alert,{id:"alertBox",key:"infoAlert",variant:"info",onClose:()=>s(),dismissible:!0},"Access exported visualizations via the property `exported` (",o.default.createElement("a",{href:"https://lux-api.readthedocs.io/en/latest/source/guide/export.html",target:"_blank"},"More details"),")")),o.default.createElement("div",null,d,h,u,p)}}t.default=l},935:function(e,t,n){"use strict";var r=this&&this.__createBinding||(Object.create?function(e,t,n,r){void 0===r&&(r=n),Object.defineProperty(e,r,{enumerable:!0,get:function(){return t[n]}})}:function(e,t,n,r){void 0===r&&(r=n),e[r]=t[n]}),i=this&&this.__setModuleDefault||(Object.create?function(e,t){Object.defineProperty(e,"default",{enumerable:!0,value:t})}:function(e,t){e.default=t}),s=this&&this.__importStar||function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)"default"!==n&&Object.prototype.hasOwnProperty.call(e,n)&&r(t,e,n);return i(t,e),t},o=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});const a=s(n(6271)),l=o(n(6597)),c=n(5276),d=o(n(6802)),p=n(6988);class u extends a.Component{constructor(e){super(e);var t={selected:e.multiple?[]:-1};this.state=t}onItemSelected(e){this.setState(((t,n)=>{if(n.multiple){var r=t.selected;return r.indexOf(e)>-1?(p.dispatchLogEvent("unclickVis",{tabTitle:this.props.title,index:e,title:this.props.graphSpec[e].title,mark:this.props.graphSpec[e].mark,encoding:this.props.graphSpec[e].encoding}),r=r.filter((t=>t!=e)),n.onChange(r)):(p.dispatchLogEvent("clickVis",{tabTitle:this.props.title,index:e,title:this.props.graphSpec[e].title,mark:this.props.graphSpec[e].mark,encoding:this.props.graphSpec[e].encoding}),r.length>=n.maxSelectable||(r.push(e),n.onChange(r))),{selected:r}}return p.dispatchLogEvent("clickVis",e),n.onChange(e),{selected:e}}))}removeDeletedCharts(){this.setState({selected:[]})}render(){return a.default.createElement("div",{className:"chartGalleryTabContent"},a.default.createElement("p",{className:"text-description",dangerouslySetInnerHTML:{__html:this.props.description}}),a.default.createElement(d.default,{galleryItems:this.props.graphSpec.map(((e,t)=>a.default.createElement("div",{key:t.toString(),className:"graph-container",id:"graph-container-".concat(t.toString())},this.state.selected.indexOf(t)>-1?a.default.createElement(l.default,{key:t,selected:!0,onClick:e=>{this.onItemSelected(t)}},"vislib"in e&&"config"in e&&"matplotlib"===JSON.stringify(e.vislib).substring(1,JSON.stringify(e.vislib).length-1)?a.default.createElement("img",{id:"gal-img",src:"data:image/png;base64,"+JSON.stringify(e.config).substring(1,JSON.stringify(e.config).length-1)+" "}):a.default.createElement(c.VegaLite,{spec:e,padding:{left:10,top:5,right:5,bottom:5},actions:!1})):a.default.createElement(l.default,{key:t,selected:!1,onClick:e=>{this.onItemSelected(t)}},"vislib"in e&&"config"in e&&"matplotlib"===JSON.stringify(e.vislib).substring(1,JSON.stringify(e.vislib).length-1)?a.default.createElement("img",{id:"gal-img",src:"data:image/png;base64,"+JSON.stringify(e.config).substring(1,JSON.stringify(e.config).length-1)+" "}):a.default.createElement(c.VegaLite,{spec:e,padding:{left:10,top:5,right:5,bottom:5},actions:!1}))))),title:this.props.title,currentVisShow:this.props.currentVisShow}))}}t.default=u},104:function(e,t,n){"use strict";var r=this&&this.__createBinding||(Object.create?function(e,t,n,r){void 0===r&&(r=n),Object.defineProperty(e,r,{enumerable:!0,get:function(){return t[n]}})}:function(e,t,n,r){void 0===r&&(r=n),e[r]=t[n]}),i=this&&this.__setModuleDefault||(Object.create?function(e,t){Object.defineProperty(e,"default",{enumerable:!0,value:t})}:function(e,t){e.default=t}),s=this&&this.__importStar||function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)"default"!==n&&Object.prototype.hasOwnProperty.call(e,n)&&r(t,e,n);return i(t,e),t},o=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});const a=s(n(6271)),l=n(5276),c=o(n(6597)),d=o(n(6486)),p=n(4349),u=o(n(8958)),h=o(n(4742));class f extends a.Component{constructor(e){super(e),this.state={selected:-1}}onItemSelected(){0==this.state.selected?(this.setState({selected:-1}),this.props.onChange(-2)):(this.setState({selected:0}),this.props.onChange(-1))}render(){if(d.default.isEmpty(this.props.currentVisSpec))return a.default.createElement("div",{className:"placeHolderVizContainer"});var e="vegalite",t="";if("vislib"in this.props.currentVisSpec&&"config"in this.props.currentVisSpec){e=(e=JSON.stringify(this.props.currentVisSpec.vislib)).substring(1,e.length-1);const n=JSON.stringify(this.props.currentVisSpec.config);t="data:image/png;base64,"+n.substring(1,n.length-1)+" "}if(0==this.props.numRecommendations)return a.default.createElement("div",{className:"vizContainer",style:{width:"320px"}},"matplotlib"===e?a.default.createElement("img",{id:"cur-img",src:t}):a.default.createElement(l.VegaLite,{spec:this.props.currentVisSpec,padding:{left:0,top:5,right:5,bottom:5},actions:!1}));{const n={tooltip:{width:"100px",fontSize:"13px",marginTop:"10px",textAlign:"center"}},r=p.withStyles(n)(h.default);return a.default.createElement("div",{id:"mainVizContainer"},a.default.createElement("p",{className:"title-description",style:{position:"absolute",fontSize:"20px",height:"25px",display:"inline",top:"10px",left:"40px"}},"Current Visualization"),a.default.createElement("p",{className:"text-description",style:{top:"40px",left:"40px",position:"absolute"}},"based on user specified ",a.default.createElement(r,{title:this.props.intent,arrow:!0},a.default.createElement(u.default,{style:{fontSize:"13px",minWidth:"0px",padding:"0px",background:"aliceblue",textTransform:"none",borderBottom:"1px dotted #505050"}},"intent"))),a.default.createElement("div",{id:"mainVizInnerContainer"},a.default.createElement("div",{className:"vizContainer"},a.default.createElement(c.default,{key:0,selected:this.state.selected>-1,onClick:e=>this.onItemSelected()},"matplotlib"===e?a.default.createElement("img",{id:"cur-img",src:t}):a.default.createElement(l.VegaLite,{spec:this.props.currentVisSpec,padding:{left:10,top:5,right:5,bottom:5},width:185,height:160,actions:!1})))))}}}t.default=f},8728:function(e,t,n){"use strict";var r=this&&this.__createBinding||(Object.create?function(e,t,n,r){void 0===r&&(r=n),Object.defineProperty(e,r,{enumerable:!0,get:function(){return t[n]}})}:function(e,t,n,r){void 0===r&&(r=n),e[r]=t[n]}),i=this&&this.__setModuleDefault||(Object.create?function(e,t){Object.defineProperty(e,"default",{enumerable:!0,value:t})}:function(e,t){e.default=t}),s=this&&this.__importStar||function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)"default"!==n&&Object.prototype.hasOwnProperty.call(e,n)&&r(t,e,n);return i(t,e),t};Object.defineProperty(t,"__esModule",{value:!0});const o=s(n(6271));class a extends o.Component{constructor(e){super(e)}render(){const{message:e,toggleInfoPanel:t,openInfo:n}=this.props;let r,i;return""!=e&&(r=o.default.createElement("i",{id:"infoBtn",className:"fa fa-info-circle",onClick:e=>t(e)}),i=o.default.createElement("div",{className:"info-footer",style:{display:n?"flex":"none"}},o.default.createElement("p",{className:"infoMsgText",dangerouslySetInnerHTML:{__html:e}}))),o.default.createElement("span",null,r,i)}}t.default=a},6802:function(e,t,n){"use strict";var r=this&&this.__createBinding||(Object.create?function(e,t,n,r){void 0===r&&(r=n),Object.defineProperty(e,r,{enumerable:!0,get:function(){return t[n]}})}:function(e,t,n,r){void 0===r&&(r=n),e[r]=t[n]}),i=this&&this.__setModuleDefault||(Object.create?function(e,t){Object.defineProperty(e,"default",{enumerable:!0,value:t})}:function(e,t){e.default=t}),s=this&&this.__importStar||function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)"default"!==n&&Object.prototype.hasOwnProperty.call(e,n)&&r(t,e,n);return i(t,e),t};Object.defineProperty(t,"__esModule",{value:!0});const o=s(n(6271)),a=n(6988);class l extends o.Component{constructor(e){super(e),this.state={isScrolling:!1,firstScroll:!0,scrollIndicator:!0},this.handleScroll=this.handleScroll.bind(this),this.scrollStartStopListener=this.scrollStartStopListener.bind(this)}handleScroll(e){this.setState({scrollIndicator:!1});var t=this;this.scrollStartStopListener((function(){a.dispatchLogEvent("stopScroll",t.props.title),t.setState({firstScroll:!0})}))}scrollStartStopListener(e){e&&"function"==typeof e&&(this.state.firstScroll&&(a.dispatchLogEvent("startScroll",this.props.title),this.setState({firstScroll:!1})),window.clearTimeout(this.state.isScrolling),this.setState({isScrolling:setTimeout((function(){e()}),60)}))}render(){let e=!1,t=this.props.galleryItems.length;var n;return this.props.currentVisShow&&this.props.galleryItems.length>2?(e=!0,t-=2):!this.props.currentVisShow&&this.props.galleryItems.length>3&&(e=!0,t-=3),n=1==t?"Scroll for "+t+" more chart":"Scroll for "+t+" more charts",o.default.createElement("div",{id:"staticOuterDiv",className:"recommendationStaticContentOuter",onScroll:this.handleScroll},o.default.createElement("div",{id:"mult-graph-container",className:"recommendationContentInner"},this.props.galleryItems),o.default.createElement("div",{id:"scroll-indicator-background",style:{visibility:this.state.scrollIndicator&&e?"visible":"hidden"}},o.default.createElement("p",{id:"scroll-indicator",style:{visibility:this.state.scrollIndicator&&e?"visible":"hidden"}},n,o.default.createElement("i",{id:"first-arrow",className:"fa fa-chevron-right"}),o.default.createElement("i",{id:"second-arrow",className:"fa fa-chevron-right"})," ")))}}t.default=l},6597:function(e,t,n){"use strict";var r=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});const i=r(n(6271));class s extends i.default.Component{render(){var e="selectable "+(this.props.selected?"selected":"");return i.default.createElement("div",{className:"card",style:{display:"inline-block"}},i.default.createElement("div",{className:e,onClick:this.props.onClick},this.props.children,i.default.createElement("div",{className:"check"},i.default.createElement("span",{className:"checkmark"},"✔"))))}}t.default=s},6988:(e,t)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.dispatchLogEvent=void 0,t.dispatchLogEvent=function(e,t){var n=new CustomEvent("LOG",{detail:{action:e,param:t}});document.dispatchEvent(n)}},8657:(e,t,n)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.MODULE_NAME=t.MODULE_VERSION=void 0;const r=n(306);t.MODULE_VERSION=r.version,t.MODULE_NAME=r.name},8604:function(e,t,n){"use strict";var r=this&&this.__createBinding||(Object.create?function(e,t,n,r){void 0===r&&(r=n),Object.defineProperty(e,r,{enumerable:!0,get:function(){return t[n]}})}:function(e,t,n,r){void 0===r&&(r=n),e[r]=t[n]}),i=this&&this.__setModuleDefault||(Object.create?function(e,t){Object.defineProperty(e,"default",{enumerable:!0,value:t})}:function(e,t){e.default=t}),s=this&&this.__importStar||function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)"default"!==n&&Object.prototype.hasOwnProperty.call(e,n)&&r(t,e,n);return i(t,e),t};Object.defineProperty(t,"__esModule",{value:!0});const o=s(n(6271));class a extends o.Component{constructor(e){super(e)}render(){const{message:e,toggleWarningPanel:t,openWarning:n}=this.props;let r,i;return""!=e&&(r=o.default.createElement("i",{id:"warnBtn",className:"fa fa-exclamation-triangle",onClick:e=>t(e)}),i=o.default.createElement("div",{className:"warning-footer",style:{display:n?"flex":"none"}},o.default.createElement("p",{className:"warnMsgText",dangerouslySetInnerHTML:{__html:e}}))),o.default.createElement("div",null,r,i)}}t.default=a},1367:function(e,t,n){"use strict";var r=this&&this.__createBinding||(Object.create?function(e,t,n,r){void 0===r&&(r=n),Object.defineProperty(e,r,{enumerable:!0,get:function(){return t[n]}})}:function(e,t,n,r){void 0===r&&(r=n),e[r]=t[n]}),i=this&&this.__setModuleDefault||(Object.create?function(e,t){Object.defineProperty(e,"default",{enumerable:!0,value:t})}:function(e,t){e.default=t}),s=this&&this.__importStar||function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)"default"!==n&&Object.prototype.hasOwnProperty.call(e,n)&&r(t,e,n);return i(t,e),t},o=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0}),t.LuxWidgetView=t.LuxModel=void 0;const a=n(134),l=n(8657);n(9259);const c=s(n(6271)),d=s(n(4456)),p=o(n(6486)),u=n(8650),h=o(n(935)),f=o(n(104)),g=n(6988),m=o(n(974)),b=o(n(8604)),x=o(n(8728));class v extends a.DOMWidgetModel{defaults(){return Object.assign(Object.assign({},super.defaults()),{_model_name:v.model_name,_model_module:v.model_module,_model_module_version:v.model_module_version,_view_name:v.view_name,_view_module:v.view_module,_view_module_version:v.model_module_version})}}t.LuxModel=v,v.serializers=Object.assign({},a.DOMWidgetModel.serializers),v.model_name="LuxModel",v.model_module=l.MODULE_NAME,v.model_module_version=l.MODULE_VERSION,v.view_name="LuxWidgetView",v.view_module=l.MODULE_NAME,v.view_module_version=l.MODULE_VERSION;class y extends a.DOMWidgetView{initialize(){let e=this;class t extends c.Component{constructor(e){super(e),this.chartComponents=Array(),this.handleCurrentVisSelect=e=>{this.setState({currentVisSelected:e},(()=>{-1==e?this.onListChanged(-1,null):this.onListChanged(-2,null)}))};for(var t=0;t<this.props.model.get("recommendations").length;t++)this.chartComponents.push(c.createRef());this.state={currentVis:e.model.get("current_vis"),recommendations:e.model.get("recommendations"),intent:e.model.get("intent"),selectedIntentIndex:{},message:e.model.get("message"),longDescription:this.generateDescription(null),tabItems:this.generateTabItems(),activeTab:e.activeTab,showAlert:!1,selectedRec:{},_selectedVisIdxs:{},deletedIndices:{},currentVisSelected:-2,openWarning:!1,openInfo:!1},this.handleCurrentVisSelect=this.handleCurrentVisSelect.bind(this),this.handleSelect=this.handleSelect.bind(this),this.exportSelection=this.exportSelection.bind(this),this.toggleWarningPanel=this.toggleWarningPanel.bind(this),this.deleteSelection=this.deleteSelection.bind(this),this.setIntent=this.setIntent.bind(this),this.closeExportInfo=this.closeExportInfo.bind(this),this.toggleInfoPanel=this.toggleInfoPanel.bind(this)}toggleWarningPanel(e){this.state.openWarning?(g.dispatchLogEvent("closeWarning",this.state.message),this.setState({openWarning:!1})):(g.dispatchLogEvent("openWarning",this.state.message),this.setState({openWarning:!0}))}toggleInfoPanel(e){this.state.openInfo?(g.dispatchLogEvent("closeInfo",this.state.longDescription),this.setState({openInfo:!1})):(g.dispatchLogEvent("openInfo",this.state.longDescription),this.setState({openInfo:!0}))}closeExportInfo(){g.dispatchLogEvent("closeExportInfo",null),this.setState({showAlert:!1})}onChange(e){this.setState(e.changed)}componentDidMount(){e.listenTo(e.model,"change",this.onChange.bind(this))}componentDidUpdate(){e.model.save_changes()}generateDescription(e){if(!e){if(!(this.props.model.get("recommendations").length>0))return"";e=this.props.model.get("recommendations")[0].action}var t="";for(var n of this.props.model.get("recommendations"))n.action===e&&(t=n.long_description);return t}handleSelect(e){e&&g.dispatchLogEvent("switchTab",e);var t=this.generateDescription(e);this.setState({activeTab:e,longDescription:t})}onListChanged(e,t){var n={};for(var r of(this.state.selectedRec[e]=t,Object.keys(this.state.selectedRec)))if(r in this.state.recommendations){var i=this.state.recommendations[r].action;this.state.selectedRec[r].length>0&&(n[i]=this.state.selectedRec[r])}else-1==this.state.currentVisSelected&&(n.currentVis=this.state.currentVis);this.setState({_selectedVisIdxs:n})}exportSelection(){g.dispatchLogEvent("exportBtnClick",this.state._selectedVisIdxs),this.setState((e=>({showAlert:!0}))),setTimeout((()=>{this.setState((e=>({showAlert:!1})))}),6e4),e.model.set("_selectedVisIdxs",this.state._selectedVisIdxs),e.model.save()}deleteSelection(){g.dispatchLogEvent("deleteBtnClick",this.state._selectedVisIdxs);var t=this.state._selectedVisIdxs;for(var n of this.state.recommendations)if(this.state._selectedVisIdxs[n.action]){let e=0;for(var r of this.state._selectedVisIdxs[n.action])n.vspec.splice(r-e,1),e++}this.setState({selectedRec:{},_selectedVisIdxs:{},deletedIndices:t});for(var i=0;i<this.props.model.get("recommendations").length;i++)this.chartComponents[i].current.removeDeletedCharts();e.model.set("deletedIndices",t),e.model.set("_selectedVisIdxs",{}),e.model.save()}setIntent(){if(g.dispatchLogEvent("intentBtnClick",this.state._selectedVisIdxs),1==Object.keys(this.state._selectedVisIdxs).length){var t=Object.keys(this.state._selectedVisIdxs)[0];if(1==this.state._selectedVisIdxs[t].length)return e.model.set("selectedIntentIndex",this.state._selectedVisIdxs),void e.model.save()}}generateTabItems(){return this.props.model.get("recommendations").map(((e,t)=>c.createElement(u.Tab,{eventKey:e.action,title:e.action},c.createElement(h.default,{key:"no refresh",ref:this.chartComponents[t],title:e.action,description:e.description,multiple:!0,maxSelectable:10,onChange:this.onListChanged.bind(this,t),graphSpec:e.vspec,currentVisShow:!p.default.isEmpty(this.props.model.get("current_vis"))}))))}generateNoRecsWarning(){if(""!=this.state.message)return c.createElement("div",{id:"no-recs-footer",style:{display:"flex"}},c.createElement("div",{id:"no-recs",className:"fa fa-exclamation-triangle"}),c.createElement("div",null,c.createElement("p",{className:"warnMsgText",dangerouslySetInnerHTML:{__html:this.state.message.replace(/<[^>]+>/g,"")}})))}render(){var e=Object.keys(this.state._selectedVisIdxs).length>0,t=1==Object.keys(this.state._selectedVisIdxs).length&&1==Object.values(this.state._selectedVisIdxs)[0].length;return 0==this.state.recommendations.length?c.createElement("div",{id:"oneViewWidgetContainer",style:{flexDirection:"column"}},c.createElement("div",{style:{display:"flex",flexDirection:"row"}},c.createElement(f.default,{intent:this.state.intent,currentVisSpec:this.state.currentVis,numRecommendations:this.state.recommendations.length,onChange:this.handleCurrentVisSelect})),c.createElement(m.default,{buttonsEnabled:e,deleteSelection:this.deleteSelection,exportSelection:this.exportSelection,setIntent:this.setIntent,closeExportInfo:this.closeExportInfo,tabItems:this.state.tabItems,showAlert:this.state.showAlert,intentEnabled:t}),this.generateNoRecsWarning()):this.state.recommendations.length>0?c.createElement("div",{id:"widgetContainer",style:{flexDirection:"column"}},c.createElement("div",{style:{display:"flex",flexDirection:"row"}},c.createElement(f.default,{intent:this.state.intent,currentVisSpec:this.state.currentVis,numRecommendations:this.state.recommendations.length,onChange:this.handleCurrentVisSelect}),c.createElement("div",{id:"tabBanner"},c.createElement("p",{className:"title-description",style:{visibility:p.default.isEmpty(this.state.currentVis)?"hidden":"visible"}},"You might be interested in..."),c.createElement(u.Tabs,{activeKey:this.state.activeTab,id:"tabBannerList",onSelect:this.handleSelect,className:p.default.isEmpty(this.state.currentVis)?"":"tabBannerPadding"},this.state.tabItems))),c.createElement(m.default,{buttonsEnabled:e,deleteSelection:this.deleteSelection,exportSelection:this.exportSelection,setIntent:this.setIntent,closeExportInfo:this.closeExportInfo,tabItems:this.state.tabItems,showAlert:this.state.showAlert,intentEnabled:t}),c.createElement(x.default,{message:this.state.longDescription,toggleInfoPanel:this.toggleInfoPanel,openInfo:this.state.openInfo}),c.createElement(b.default,{message:this.state.message,toggleWarningPanel:this.toggleWarningPanel,openWarning:this.state.openWarning})):void 0}}const n=document.createElement("div"),r=c.createElement(t,e);d.render(r,n),e.el.append(n),g.dispatchLogEvent("initWidget","")}}t.LuxWidgetView=y},1150:(e,t,n)=>{(t=n(3645)(!1)).push([e.id,".jp-OutputArea-output {\r\n    height: auto;\r\n    overflow: auto;\r\n    user-select: text;\r\n    -moz-user-select: text;\r\n    -webkit-user-select: text;\r\n    -ms-user-select: text;\r\n    width: 90%;\r\n    padding-bottom: 4px;\r\n  }\r\n  \r\n  #widgetContainer{\r\n    /* height: 315px; */\r\n    width:100%;\r\n    display:inline-flex;\r\n  }\r\n  \r\n  #oneViewWidgetContainer {\r\n    width:100%;\r\n    display:inline-flex;\r\n  }\r\n  input[type=text], select {\r\n    width: 100%;\r\n    padding: 12px 20px;\r\n    margin: 8px 0;\r\n    display: inline-block;\r\n    border: 1px solid #ccc;\r\n    border-radius: 4px;\r\n    box-sizing: border-box;\r\n  }\r\n  #mult-graph-container{\r\n    display: inline-flex;\r\n  }\r\n  .recommendationStaticContentOuter{\r\n    scroll-snap-align: start;\r\n    /* border: 0.5px solid #bcbdbd; */\r\n    overflow-x: auto;\r\n    overflow-y: hidden;\r\n    display: inline-block;\r\n    text-align: left;\r\n    /* padding-left: 20px; */\r\n    /* padding-top: 10px; */\r\n    /* height: 100%; */\r\n    box-sizing: border-box;\r\n    width: 100%;\r\n    position: relative;\r\n  }\r\n  .recommendationContentOuter{\r\n    /* overflow: scroll; */\r\n    /* Prevents unneccesary x-scroll for specified facet */\r\n    /* width:  100%; */\r\n    /*height: 225px;*/\r\n    display: flex;\r\n    /* display: inline-block;*/\r\n    margin-left: 10px;\r\n    text-align: left;\r\n  }\r\n  .vega-embed {\r\n    position: relative;\r\n    display: inline-block;\r\n    /* padding-right: 38px; */\r\n    flex: 1 0 auto;\r\n    padding-right: 10px !important;\r\n  }\r\n  /* .vega-embed:hover{\r\n    border: solid 1px;\r\n    border-color: rgba(0, 0, 0, 0.4);\r\n    box-shadow: 5px 5px 5px 0px rgba(0,0,0,0.5);\r\n    cursor: pointer;\r\n  }   */\r\n  .vega-embed:checked{\r\n    border: solid 1px;\r\n    border-color: blue;\r\n  }\r\n  .recommendationContentInner{\r\n    /*width: auto;\r\n    max-width: 150%;*/\r\n    /*display: inline-block;*/\r\n    /*margin-left: 8px;*/\r\n    text-align: left;\r\n    display: flex;\r\n    flex-wrap: nowrap;\r\n    align-items: flex-end;\r\n    /* overflow-x: auto; */\r\n    overflow-x: initial;\r\n    padding-right: 50px;\r\n    /*height: 280px;*/\r\n    /* width: max-content;\r\n    overflow-x: auto; */\r\n    /* height: 100px; */\r\n  }\r\n  \r\n  .toolDiv{\r\n    position: relative;\r\n    top: -20px;\r\n    left: -5px;\r\n  }\r\n  .fa {\r\n    color:gray;\r\n  }\r\n  .fa:hover{\r\n    color:black;\r\n  }\r\n  \r\n  .graph-container{\r\n    height: 250px;\r\n    max-height: 270px;\r\n    margin: 10px 0px 5px 5px;\r\n    padding: 0px 0px 0px 0px;\r\n  }\r\n  #mainVizTitle{\r\n    font-size: 20px;\r\n    display: inline-block;\r\n    left: 10%;\r\n    top: 0px;\r\n    position: absolute;\r\n  }\r\n  #mainVizContainer{\r\n    padding: 10px 0px 0px 0px;\r\n    border: 0.5px solid #bcbdbd;\r\n    overflow-y: auto;\r\n  }\r\n  \r\n  #mainVizInnerContainer{\r\n    margin-top: 50px;\r\n  }\r\n  \r\n  #placeHolderVizContainer{\r\n    min-height: 100%;\r\n    min-width: 1px;\r\n  }\r\n  #tabBanner{\r\n    border: 0.5px solid #bcbdbd;\r\n    width: auto;\r\n    overflow: hidden;\r\n    flex: 1;\r\n  }\r\n  #exportBtn{\r\n    position: absolute;\r\n    /* bottom: 90%; */\r\n    /* left: 97%; */\r\n    top: 5px;\r\n    right: 5px;\r\n    font-size: 20px;\r\n    padding: 5px;\r\n  }\r\n  \r\n  #deleteBtn{\r\n    position: absolute;\r\n    top: 5px;\r\n    right: 33px;\r\n    font-size: 20px;\r\n    padding: 5px;\r\n  }\r\n  \r\n  #intentBtn{\r\n    position: absolute;\r\n    top: 5px;\r\n    right: 59px;\r\n    font-size: 20px;\r\n    padding: 5px;\r\n  }\r\n  \r\n  #alertBox{\r\n    position: absolute;\r\n    left: 23%;\r\n    width: 54%;\r\n    bottom: 6%;\r\n    padding: 5px 30px 5px 10px;\r\n  }\r\n  \r\n  /* \r\n    JupyterLab does support bootstrap, so need to add bootstrap css\r\n    https://gist.github.com/EvanHerman/315952ebf371cb83ee9db6c54499933d\r\n  */\r\n  \r\n  .alert {\r\n    padding: 15px;\r\n    margin-bottom: 20px;\r\n    border: 1px solid transparent;\r\n    border-radius: 4px;\r\n  }\r\n  \r\n  .alert-dismissable .close,\r\n  .alert-dismissible .close {\r\n    position: relative;\r\n    top: -2px;\r\n    right: -21px;\r\n    color: inherit;\r\n  }\r\n  \r\n  .alert-dismissable,\r\n  .alert-dismissible {\r\n    padding-right: 35px;\r\n  }\r\n  \r\n  button.close {\r\n    padding: 0;\r\n    cursor: pointer;\r\n    background: transparent;\r\n    border: 0;\r\n    -webkit-appearance: none;\r\n    appearance: none;\r\n  }\r\n  \r\n  .close {\r\n    float: right;\r\n    font-size: 19.5px;\r\n    font-weight: bold;\r\n    line-height: 1;\r\n    color: #000;\r\n    text-shadow: 0 1px 0 #fff;\r\n    filter: alpha(opacity=20);\r\n    opacity: 0.2;\r\n  }\r\n  \r\n  .alert-info {\r\n    background-color: #d9edf7;\r\n    border-color: #bce8f1;\r\n    color: #31708f;\r\n  }\r\n  \r\n  /* canvas{\r\n    width: 229px;\r\n    height: 245px;\r\n  } */\r\n  /* Override .fade default to show tab*/\r\n  .fade {\r\n    opacity:1;\r\n  }\r\n  /* Copied from bootstrap.css */\r\n  .nav {\r\n    display: -ms-flexbox;\r\n    display: flex;\r\n    -ms-flex-wrap: wrap;\r\n    flex-wrap: wrap;\r\n    padding-left: 0;\r\n    margin-bottom: 0;\r\n    list-style: none;\r\n  }\r\n  \r\n  .nav-link {\r\n    display: block;\r\n    padding: 0.5rem 1rem;\r\n  }\r\n  \r\n  .nav-link:hover, .nav-link:focus {\r\n    text-decoration: none;\r\n  }\r\n  \r\n  .nav-link.disabled {\r\n    color: #6c757d;\r\n    pointer-events: none;\r\n    cursor: default;\r\n  }\r\n  \r\n  .nav-tabs {\r\n    border-bottom: 1px solid #dee2e6;\r\n  }\r\n  \r\n  .tabBannerPadding {\r\n    padding-left: 210px;\r\n  }\r\n  \r\n  .nav-tabs .nav-item {\r\n    margin-bottom: -1px;\r\n  }\r\n  \r\n  .nav-tabs .nav-link {\r\n    border: 1px solid transparent;\r\n    border-top-left-radius: 0.25rem;\r\n    border-top-right-radius: 0.25rem;\r\n  }\r\n  \r\n  .nav-tabs .nav-link:hover, .nav-tabs .nav-link:focus {\r\n    border-color: #e9ecef #e9ecef #dee2e6;\r\n  }\r\n  \r\n  .nav-tabs .nav-link.disabled {\r\n    color: #6c757d;\r\n    background-color: transparent;\r\n    border-color: transparent;\r\n  }\r\n  \r\n  .nav-tabs .nav-link.active,\r\n  .nav-tabs .nav-item.show .nav-link {\r\n    color: #495057;\r\n    background-color: #fff;\r\n    border-color: #dee2e6 #dee2e6 #fff;\r\n    font-weight: 500;\r\n  }\r\n  \r\n  .nav-tabs .dropdown-menu {\r\n    margin-top: -1px;\r\n    border-top-left-radius: 0;\r\n    border-top-right-radius: 0;\r\n  }\r\n  \r\n  .nav-pills .nav-link {\r\n    border-radius: 0.25rem;\r\n  }\r\n  \r\n  .nav-pills .nav-link.active,\r\n  .nav-pills .show > .nav-link {\r\n    color: #fff;\r\n    background-color: #007bff;\r\n  }\r\n  \r\n  .nav-fill .nav-item {\r\n    -ms-flex: 1 1 auto;\r\n    flex: 1 1 auto;\r\n    text-align: center;\r\n  }\r\n  \r\n  .nav-justified .nav-item {\r\n    -ms-flex-preferred-size: 0;\r\n    flex-basis: 0;\r\n    -ms-flex-positive: 1;\r\n    flex-grow: 1;\r\n    text-align: center;\r\n  }\r\n  \r\n  .tab-content > .tab-pane {\r\n    display: none;\r\n  }\r\n  \r\n  .tab-content > .active {\r\n    display: block;\r\n  }\r\n  /* Selectable Card React Component  CSS */\r\n  /* Card */\r\n  .card {\r\n    transition: all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);\r\n    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);\r\n    background: #fff;\r\n    margin: 20px 10px;\r\n    cursor: pointer;\r\n  }\r\n  .card:hover {\r\n    box-shadow: 0 14px 28px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.22);\r\n  }\r\n  /* Selectable */\r\n  .card .selectable {\r\n    position: relative;\r\n    transition: all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);\r\n    border: 4px solid transparent;\r\n  }\r\n  .card .selectable .check {\r\n    transition: all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);\r\n    position: absolute;\r\n    top: 0;\r\n    right: 0;\r\n    z-index: 10;\r\n    width: 20px;\r\n    height: 20px;\r\n  }\r\n  .card .selectable .check:before {\r\n    transition: all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);\r\n    content: '';\r\n    border: 20px solid;\r\n    border-color: transparent;\r\n    position: absolute;\r\n    top: 0;\r\n    right: 0;\r\n    z-index: -1;\r\n  }\r\n  .card .selectable .check .checkmark {\r\n    display: block;\r\n    font: 20px sans-serif;\r\n    line-height: 20px;\r\n    text-align: center;\r\n    color: transparent;\r\n  }\r\n  .card .selectable.selected {\r\n    border-color: #4ad;\r\n  }\r\n  .card .selectable.selected .check:before {\r\n    border-color: #4ad #4ad rgba(0, 0, 255, 0) rgba(255, 0, 0, 0);\r\n  }\r\n  .card .selectable.selected .check .checkmark {\r\n    color: #fff;\r\n  }\r\n  .content {\r\n    padding: 24px;\r\n  }\r\n  .content .title, .content .description {\r\n    margin: 0;\r\n    padding: 4px;\r\n  }\r\n  .column {\r\n    float: left;\r\n    width: 50%;\r\n  }\r\n  .column > .title {\r\n    text-align: center;\r\n  }\r\n  button.card {\r\n    display: block;\r\n    cursor: pointer;\r\n    width: 180px;\r\n    margin: 20px auto;\r\n    text-align: center;\r\n    padding: 16px;\r\n    border-color: transparent;\r\n    border-radius: 10px;\r\n    background: #4ad !important;\r\n    color: #fff;\r\n    text-transform: uppercase;\r\n    font-weight: bold;\r\n    outline: none;\r\n  }\r\n  button.card:focus {\r\n    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);\r\n  }\r\n  .title-description{\r\n    line-height: 2;\r\n    font-weight: 500;\r\n    margin-left: 15px;\r\n    margin-bottom: -27px;\r\n    color: rgb(0, 0, 0);\r\n    margin-top: 5px;\r\n  }\r\n  .text-description {\r\n    line-height: 2.5;\r\n    margin-left: 15px;\r\n    margin-bottom: -25px;\r\n    color: rgb(80, 80, 80);\r\n    margin-top: 5px;\r\n  }\r\n  .warning-footer {\r\n    padding: 10px;\r\n    border: 0.5px solid #bcbdbd;\r\n    background-color: lightyellow;\r\n    display: flex;\r\n    flex-direction: row;\r\n    border-top: 0px;\r\n  }\r\n  .info-footer {\r\n    padding: 10px;\r\n    border: 0.5px solid #bcbdbd;\r\n    background-color: rgb(206, 228, 255);\r\n    display: flex;\r\n    flex-direction: row;\r\n    border-top: 0px;\r\n    position: relative;\r\n  }\r\n  #no-recs-footer {\r\n    padding: 10px;\r\n    border: 0.5px solid #bcbdbd;\r\n    background-color: lightyellow;\r\n    display: flex;\r\n    flex-direction: row;\r\n    position: relative;\r\n  }\r\n  #no-recs {\r\n    color: #ffbc00;\r\n    pointer-events: none;\r\n    position: relative;\r\n    top: 5px;\r\n    left: px;\r\n    font-size: 25px;\r\n    padding: 5px;\r\n  }\r\n  #no-recs-text {\r\n    color: rgb(80, 80, 80);\r\n    font-size: 20px;\r\n    margin-top: 5px;\r\n    margin-left: 5px;\r\n    margin-right: 30px;\r\n  }\r\n  #scroll-indicator {\r\n    margin-right: 10px;\r\n    margin-top:  5px;\r\n    text-align: right;\r\n    color: rgb(80, 80, 80);\r\n    font-weight: 700;\r\n    z-index: 0;\r\n    position: relative;\r\n    margin-bottom: 15px;\r\n  }\r\n  #scroll-indicator-background {\r\n    z-index: 0;\r\n    position: relative;\r\n    background-color: rgba(250, 250, 250, 0.8);\r\n    /* width: 210px; */\r\n    height: 25px;\r\n    float: right;\r\n    margin-top: -26px;\r\n  }\r\n  /* This forces the toggle button to overlap with widget.Output (main widget). This may leak to other .widget-button if there are non-Lux widgets in the notebook. */\r\n  /* .widget-button{  \r\n    position: absolute;\r\n    z-index: 999;\r\n    border-radius: 5px;\r\n  } */\r\n  \r\n  #first-arrow{\r\n    margin-left: 25px;\r\n    opacity: 50%;\r\n  }\r\n  \r\n  #second-arrow{\r\n    margin-left: -4px;\r\n  }\r\n  \r\n  .highlight-intent{\r\n    font-weight: 500;\r\n    background: aliceblue;\r\n    display: inline;\r\n    /* display: inline-table;\r\n    text-align: left; */\r\n  }\r\n  .highlight-descriptor{\r\n    font-weight: 500;\r\n    background: #fffee1;\r\n    display: inline;\r\n    /* display: inline-table;\r\n    text-align: left; */\r\n  }\r\n  #intent_str {\r\n    margin-top: 5px;\r\n    font-weight: 500;\r\n    max-width:100px\r\n  }\r\n  \r\n  #warnBtn{\r\n    color: #ffbc00;\r\n    position: absolute;\r\n    top: 5px;\r\n    right: 88px;\r\n    font-size: 20px;\r\n    padding: 5px;\r\n  }\r\n  #warnBtn:hover{\r\n    color:black;\r\n  }\r\n  .warnMsgText{\r\n    color: rgb(80, 80, 80);\r\n    margin-top: 5px;\r\n    margin-left: 5px;\r\n    margin-right: 30px;\r\n  }\r\n  #infoBtn{\r\n    position: absolute;\r\n    top: 45px;\r\n    right: 5px;\r\n    font-size: 20px;\r\n    padding: 5px;\r\n  }\r\n  .infoMsgText{\r\n    color: rgb(80, 80, 80);\r\n    margin-top: 5px;\r\n    margin-left: 30px;\r\n    margin-right: 30px;\r\n  }\r\n  \r\n  #cur-img {\r\n    all: revert;\r\n    height: 218px;\r\n  }\r\n  \r\n  #gal-img {\r\n    all: revert;\r\n    height: 212px;\r\n  }\r\n  ",""]),e.exports=t},9259:(e,t,n)=>{var r=n(3379),i=n(1150);"string"==typeof(i=i.__esModule?i.default:i)&&(i=[[e.id,i,""]]);r(i,{insert:"head",singleton:!1}),e.exports=i.locals||{}},306:e=>{"use strict";e.exports=JSON.parse('{"name":"luxwidget","version":"0.1.5","description":"A Custom Jupyter Widget Library","keywords":["jupyter","jupyterlab","jupyterlab-extension","widgets"],"files":["webpack.config.js","tsconfig.json","luxwidget/*.py","luxwidget/nbextension/static/*","luxwidget/labextension/static/*","luxwidget/labextension/package.json","*.py","src/*.tsx","src/*.ts","lib/**/*.js","lib/**/*.ts","dist/*.js","style/index.js"],"homepage":"https://github.com/lux-org/lux-widget","bugs":{"url":"https://github.com/lux-org/lux-widget/issues"},"license":"Apache-2.0","author":{"name":"Doris Jung-Lin Lee","email":"dorisjunglinlee@gmail.com"},"main":"lib/index.js","types":"./lib/index.d.ts","repository":{"type":"git","url":"https://github.com/lux-org/lux-widget"},"scripts":{"build":"jlpm run build:lib && jlpm run build:labextension:dev","build:prod":"jlpm run build:lib && jlpm run build:labextension","build:labextension":"jupyter labextension build .","build:labextension:dev":"jupyter labextension build --development True .","build:lib":"tsc","clean":"jlpm run clean:lib","clean:lib":"rimraf lib tsconfig.tsbuildinfo","clean:labextension":"rimraf {{ cookiecutter.python_name }}/labextension","clean:all":"jlpm run clean:lib && jlpm run clean:labextension","eslint":"eslint . --ext .ts,.tsx --fix","eslint:check":"eslint . --ext .ts,.tsx","install:extension":"jupyter labextension develop --overwrite .","prepare":"jlpm run clean && jlpm run build:prod","watch":"run-p watch:src watch:labextension","watch:src":"tsc -w","watch:labextension":"jupyter labextension watch ."},"dependencies":{"@jupyter-widgets/base":"^3 || ^4.0.0","@material-ui/core":"^4.11.0","bootstrap":"^4.4.1","detect-libc":"^1.0.3","jquery":"^3.4.1","needle":"^2.4.0","nopt":"^4.0.1","rc":"^1.2.8","react":"^17.0.1","react-bootstrap":"^1.0.0-beta.16","react-dom":"^17.0.1","react-vega":"7.1.1","vega":"^5.9.0","vega-embed":"^6.2.1","vega-lite":"^4.0.2"},"devDependencies":{"@babel/preset-react":"^7.7.4","@jupyterlab/builder":"^3.0.0","@lumino/application":"^1.13.1","@lumino/widgets":"^1.16.1","@types/expect.js":"^0.3.29","@types/jquery":"^3.5.4","@types/mocha":"^5.2.5","@types/node":"^10.11.6","@types/react":"^16.9.16","@types/react-dom":"^16.9.4","@types/webpack-env":"^1.13.6","@typescript-eslint/eslint-plugin":"^4.8.1","@typescript-eslint/parser":"^4.8.1","css-loader":"^3.2.0","eslint":"^7.14.0","eslint-config-prettier":"^6.15.0","eslint-plugin-prettier":"^3.1.4","expect.js":"^0.3.1","fs-extra":"^7.0.0","mkdirp":"^0.5.1","mocha":"^5.2.0","npm-run-all":"^4.1.5","prettier":"^2.1.1","rimraf":"^3.0.2","source-map-loader":"^0.2.4","style-loader":"^1.0.0","ts-loader":"^6.2.1","typescript":"~4.1.3","webpack":"^4.46.0","webpack-cli":"^3.3.12"},"jupyterlab":{"extension":"lib/plugin","outputDir":"luxwidget/labextension"},"presets":["@babel/preset-env","@babel/preset-react"],"styleModule":"style/index.js"}')}}]);