(self.webpackChunkluxwidget=self.webpackChunkluxwidget||[]).push([[367],{974:function(e,t,n){"use strict";var i=this&&this.__createBinding||(Object.create?function(e,t,n,i){void 0===i&&(i=n),Object.defineProperty(e,i,{enumerable:!0,get:function(){return t[n]}})}:function(e,t,n,i){void 0===i&&(i=n),e[i]=t[n]}),s=this&&this.__setModuleDefault||(Object.create?function(e,t){Object.defineProperty(e,"default",{enumerable:!0,value:t})}:function(e,t){e.default=t}),o=this&&this.__importStar||function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)"default"!==n&&Object.prototype.hasOwnProperty.call(e,n)&&i(t,e,n);return s(t,e),t};Object.defineProperty(t,"__esModule",{value:!0});const a=o(n(6271)),l=n(8650);class r extends a.Component{constructor(e){super(e)}render(){const{buttonsEnabled:e,tabItems:t,deleteSelection:n,exportSelection:i,setIntent:s,closeExportInfo:o,showAlert:r,intentEnabled:c}=this.props;let d,p,u,h;return t.length>0&&(e?(d=a.default.createElement("i",{id:"deleteBtn",className:"fa fa-trash",title:"Delete selected visualizations",onClick:()=>n()}),p=a.default.createElement("i",{id:"exportBtn",className:"fa fa-upload",title:"Export selected visualizations into variable",onClick:e=>i()})):(d=a.default.createElement("i",{id:"deleteBtn",className:"fa fa-trash",style:{opacity:.2,cursor:"not-allowed"},title:"Select one or more visualizations to delete"}),p=a.default.createElement("i",{id:"exportBtn",className:"fa fa-upload",style:{opacity:.2,cursor:"not-allowed"},title:"Select one or more visualizations to export into variable"})),u=e&&c?a.default.createElement("i",{id:"intentBtn",className:"fa fa-search",title:"Set selected visualization as intent",onClick:()=>s()}):a.default.createElement("i",{id:"intentBtn",className:"fa fa-search",style:{opacity:.2,cursor:"not-allowed"},title:"Select no more than one visualization to set as intent"})),r&&(h=a.default.createElement(l.Alert,{id:"alertBox",key:"infoAlert",variant:"info",onClose:()=>o(),dismissible:!0},"Access exported visualizations via the property `exported` (",a.default.createElement("a",{href:"https://lux-api.readthedocs.io/en/latest/source/guide/export.html",target:"_blank"},"More details"),")")),a.default.createElement("div",null,d,h,u,p)}}t.default=r},935:function(e,t,n){"use strict";var i=this&&this.__createBinding||(Object.create?function(e,t,n,i){void 0===i&&(i=n),Object.defineProperty(e,i,{enumerable:!0,get:function(){return t[n]}})}:function(e,t,n,i){void 0===i&&(i=n),e[i]=t[n]}),s=this&&this.__setModuleDefault||(Object.create?function(e,t){Object.defineProperty(e,"default",{enumerable:!0,value:t})}:function(e,t){e.default=t}),o=this&&this.__importStar||function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)"default"!==n&&Object.prototype.hasOwnProperty.call(e,n)&&i(t,e,n);return s(t,e),t},a=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});const l=o(n(6271)),r=a(n(6597)),c=n(5276),d=a(n(6802)),p=n(6988);class u extends l.Component{constructor(e){super(e);var t={selected:e.multiple?[]:-1};this.state=t}onItemSelected(e){this.setState(((t,n)=>{if(n.multiple){var i=t.selected;return i.indexOf(e)>-1?(p.dispatchLogEvent("unclickVis",{tabTitle:this.props.title,index:e,title:this.props.graphSpec[e].title,mark:this.props.graphSpec[e].mark,encoding:this.props.graphSpec[e].encoding}),i=i.filter((t=>t!=e)),n.onChange(i)):(p.dispatchLogEvent("clickVis",{tabTitle:this.props.title,index:e,title:this.props.graphSpec[e].title,mark:this.props.graphSpec[e].mark,encoding:this.props.graphSpec[e].encoding}),i.length>=n.maxSelectable||(i.push(e),n.onChange(i))),{selected:i}}return p.dispatchLogEvent("clickVis",e),n.onChange(e),{selected:e}}))}removeDeletedCharts(){this.setState({selected:[]})}render(){return l.default.createElement("div",{className:"chartGalleryTabContent"},l.default.createElement("p",{className:"text-description",dangerouslySetInnerHTML:{__html:this.props.description}}),l.default.createElement(d.default,{galleryItems:this.props.graphSpec.map(((e,t)=>l.default.createElement("div",{key:t.toString(),className:"graph-container",id:"graph-container-".concat(t.toString())},this.state.selected.indexOf(t)>-1?l.default.createElement(r.default,{key:t,selected:!0,onClick:e=>{this.onItemSelected(t)}},"vislib"in e&&"config"in e&&"matplotlib"===JSON.stringify(e.vislib).substring(1,JSON.stringify(e.vislib).length-1)?l.default.createElement("img",{id:"gal-img",src:"data:image/png;base64,"+JSON.stringify(e.config).substring(1,JSON.stringify(e.config).length-1)+" ",style:{height:50+160*this.props.plottingScale+"px"}}):l.default.createElement(c.VegaLite,{spec:e,padding:{left:10,top:5,right:5,bottom:5},actions:!1})):l.default.createElement(r.default,{key:t,selected:!1,onClick:e=>{this.onItemSelected(t)}},"vislib"in e&&"config"in e&&"matplotlib"===JSON.stringify(e.vislib).substring(1,JSON.stringify(e.vislib).length-1)?l.default.createElement("img",{id:"gal-img",src:"data:image/png;base64,"+JSON.stringify(e.config).substring(1,JSON.stringify(e.config).length-1)+" ",style:{height:50+160*this.props.plottingScale+"px"}}):l.default.createElement(c.VegaLite,{spec:e,padding:{left:10,top:5,right:5,bottom:5},actions:!1}))))),title:this.props.title,currentVisShow:this.props.currentVisShow,plottingScale:this.props.plottingScale}))}}t.default=u},104:function(e,t,n){"use strict";var i=this&&this.__createBinding||(Object.create?function(e,t,n,i){void 0===i&&(i=n),Object.defineProperty(e,i,{enumerable:!0,get:function(){return t[n]}})}:function(e,t,n,i){void 0===i&&(i=n),e[i]=t[n]}),s=this&&this.__setModuleDefault||(Object.create?function(e,t){Object.defineProperty(e,"default",{enumerable:!0,value:t})}:function(e,t){e.default=t}),o=this&&this.__importStar||function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)"default"!==n&&Object.prototype.hasOwnProperty.call(e,n)&&i(t,e,n);return s(t,e),t},a=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});const l=o(n(6271)),r=n(5276),c=a(n(6597)),d=a(n(6486)),p=n(4349),u=a(n(8958)),h=a(n(4742));class f extends l.Component{constructor(e){super(e),this.state={selected:-1}}onItemSelected(){0==this.state.selected?(this.setState({selected:-1}),this.props.onChange(-2)):(this.setState({selected:0}),this.props.onChange(-1))}render(){if(d.default.isEmpty(this.props.currentVisSpec))return l.default.createElement("div",{className:"placeHolderVizContainer"});var e="vegalite",t="";if("vislib"in this.props.currentVisSpec&&"config"in this.props.currentVisSpec){e=(e=JSON.stringify(this.props.currentVisSpec.vislib)).substring(1,e.length-1);const n=JSON.stringify(this.props.currentVisSpec.config);t="data:image/png;base64,"+n.substring(1,n.length-1)+" "}if(0==this.props.numRecommendations)return l.default.createElement("div",{className:"vizContainer",style:{display:"flex",justifyContent:"center",width:"320px"}},"matplotlib"===e?l.default.createElement("img",{id:"cur-img",src:t,style:{height:50+160*this.props.plottingScale+"px",width:50+185*this.props.plottingScale+"px"}}):l.default.createElement(r.VegaLite,{spec:this.props.currentVisSpec,padding:{left:0,top:5,right:5,bottom:5},actions:!1}));{const n={tooltip:{width:"100px",fontSize:"13px",marginTop:"10px",textAlign:"center"}},i=p.withStyles(n)(h.default),s="vislib"in this.props.currentVisSpec,o=(300+185*(this.props.plottingScale-1)).toString()+"px";return s?l.default.createElement("div",{id:"mainVizContainer",style:{width:o}},l.default.createElement("div",null,this.props.currentVisSpec.allcols?l.default.createElement("div",{className:"text-container-style"},l.default.createElement("p",{className:"title-description",style:{fontSize:"20px",height:"15px",display:"inline",top:"10px",left:"20px"}},"Dataframe Visualization"),l.default.createElement("p",{className:"text-description",style:{top:"40px",left:"10px",marginTop:"40px"}},"based on all columns in the dataframe")):l.default.createElement("div",{className:"text-container-style"},l.default.createElement("p",{className:"title-description",style:{fontSize:"20px",height:"15px",display:"inline",top:"10px",left:"40px"}},"Current Visualization"),l.default.createElement("p",{className:"text-description",style:{top:"40px",left:"40px",marginTop:"40px"}},"based on user specified ",l.default.createElement(i,{title:this.props.intent,arrow:!0},l.default.createElement(u.default,{style:{fontSize:"13px",minWidth:"0px",padding:"0px",background:"aliceblue",textTransform:"none",borderBottom:"1px dotted #505050"}},"intent"))))),l.default.createElement("div",{id:"mainVizInnerContainer"},l.default.createElement("div",{className:"vizContainer",style:{display:"flex",justifyContent:"center"}},l.default.createElement(c.default,{key:0,selected:this.state.selected>-1,onClick:e=>this.onItemSelected()},"matplotlib"===e?l.default.createElement("img",{id:"cur-img",src:t,style:{height:50+160*this.props.plottingScale+"px",width:50+185*this.props.plottingScale+"px"}}):l.default.createElement(r.VegaLite,{spec:this.props.currentVisSpec,padding:{left:10,top:5,right:5,bottom:5},width:185*this.props.plottingScale,height:160*this.props.plottingScale,actions:!1}))))):null}}}t.default=f},8728:function(e,t,n){"use strict";var i=this&&this.__createBinding||(Object.create?function(e,t,n,i){void 0===i&&(i=n),Object.defineProperty(e,i,{enumerable:!0,get:function(){return t[n]}})}:function(e,t,n,i){void 0===i&&(i=n),e[i]=t[n]}),s=this&&this.__setModuleDefault||(Object.create?function(e,t){Object.defineProperty(e,"default",{enumerable:!0,value:t})}:function(e,t){e.default=t}),o=this&&this.__importStar||function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)"default"!==n&&Object.prototype.hasOwnProperty.call(e,n)&&i(t,e,n);return s(t,e),t};Object.defineProperty(t,"__esModule",{value:!0});const a=o(n(6271));class l extends a.Component{constructor(e){super(e)}render(){const{message:e,toggleInfoPanel:t,openInfo:n}=this.props;let i,s;return""!=e&&(i=a.default.createElement("i",{id:"infoBtn",className:"fa fa-info-circle",onClick:e=>t(e)}),s=a.default.createElement("div",{className:"info-footer",style:{display:n?"flex":"none"}},a.default.createElement("p",{className:"infoMsgText",dangerouslySetInnerHTML:{__html:e}}))),a.default.createElement("span",null,i,s)}}t.default=l},6802:function(e,t,n){"use strict";var i=this&&this.__createBinding||(Object.create?function(e,t,n,i){void 0===i&&(i=n),Object.defineProperty(e,i,{enumerable:!0,get:function(){return t[n]}})}:function(e,t,n,i){void 0===i&&(i=n),e[i]=t[n]}),s=this&&this.__setModuleDefault||(Object.create?function(e,t){Object.defineProperty(e,"default",{enumerable:!0,value:t})}:function(e,t){e.default=t}),o=this&&this.__importStar||function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)"default"!==n&&Object.prototype.hasOwnProperty.call(e,n)&&i(t,e,n);return s(t,e),t};Object.defineProperty(t,"__esModule",{value:!0});const a=o(n(6271)),l=n(6988);class r extends a.Component{constructor(e){super(e),this.state={isScrolling:!1,firstScroll:!0,scrollIndicator:!0},this.handleScroll=this.handleScroll.bind(this),this.scrollStartStopListener=this.scrollStartStopListener.bind(this)}handleScroll(e){this.setState({scrollIndicator:!1});var t=this;this.scrollStartStopListener((function(){l.dispatchLogEvent("stopScroll",t.props.title),t.setState({firstScroll:!0})}))}scrollStartStopListener(e){e&&"function"==typeof e&&(this.state.firstScroll&&(l.dispatchLogEvent("startScroll",this.props.title),this.setState({firstScroll:!1})),window.clearTimeout(this.state.isScrolling),this.setState({isScrolling:setTimeout((function(){e()}),60)}))}render(){let e=!1,t=this.props.galleryItems.length;var n;return this.props.currentVisShow&&this.props.galleryItems.length>2?(e=!0,t-=2):!this.props.currentVisShow&&this.props.galleryItems.length>3&&(e=!0,t-=3),n=1==t?"Scroll for "+t+" more chart":"Scroll for "+t+" more charts",a.default.createElement("div",{id:"staticOuterDiv",className:"recommendationStaticContentOuter",onScroll:this.handleScroll},a.default.createElement("div",{id:"mult-graph-container",className:"recommendationContentInner"},this.props.galleryItems),a.default.createElement("div",{id:"scroll-indicator-background",style:{visibility:this.state.scrollIndicator&&e?"visible":"hidden"}},a.default.createElement("p",{id:"scroll-indicator",style:{visibility:this.state.scrollIndicator&&e?"visible":"hidden"}},n,a.default.createElement("i",{id:"first-arrow",className:"fa fa-chevron-right"}),a.default.createElement("i",{id:"second-arrow",className:"fa fa-chevron-right"})," ")))}}t.default=r},6597:function(e,t,n){"use strict";var i=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});const s=i(n(6271));class o extends s.default.Component{render(){var e="selectable "+(this.props.selected?"selected":"");return s.default.createElement("div",{className:"card",style:{display:"inline-block"}},s.default.createElement("div",{className:e,onClick:this.props.onClick},this.props.children,s.default.createElement("div",{className:"check"},s.default.createElement("span",{className:"checkmark"},"✔"))))}}t.default=o},6988:(e,t)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.dispatchLogEvent=void 0,t.dispatchLogEvent=function(e,t){var n=new CustomEvent("LOG",{detail:{action:e,param:t}});document.dispatchEvent(n)}},8657:(e,t,n)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.MODULE_NAME=t.MODULE_VERSION=void 0;const i=n(306);t.MODULE_VERSION=i.version,t.MODULE_NAME=i.name},8604:function(e,t,n){"use strict";var i=this&&this.__createBinding||(Object.create?function(e,t,n,i){void 0===i&&(i=n),Object.defineProperty(e,i,{enumerable:!0,get:function(){return t[n]}})}:function(e,t,n,i){void 0===i&&(i=n),e[i]=t[n]}),s=this&&this.__setModuleDefault||(Object.create?function(e,t){Object.defineProperty(e,"default",{enumerable:!0,value:t})}:function(e,t){e.default=t}),o=this&&this.__importStar||function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)"default"!==n&&Object.prototype.hasOwnProperty.call(e,n)&&i(t,e,n);return s(t,e),t};Object.defineProperty(t,"__esModule",{value:!0});const a=o(n(6271));class l extends a.Component{constructor(e){super(e)}render(){const{message:e,toggleWarningPanel:t,openWarning:n}=this.props;let i,s;return""!=e&&(i=a.default.createElement("i",{id:"warnBtn",className:"fa fa-exclamation-triangle",onClick:e=>t(e)}),s=a.default.createElement("div",{className:"warning-footer",style:{display:n?"flex":"none"}},a.default.createElement("p",{className:"warnMsgText",dangerouslySetInnerHTML:{__html:e}}))),a.default.createElement("div",null,i,s)}}t.default=l},1367:function(e,t,n){"use strict";var i=this&&this.__createBinding||(Object.create?function(e,t,n,i){void 0===i&&(i=n),Object.defineProperty(e,i,{enumerable:!0,get:function(){return t[n]}})}:function(e,t,n,i){void 0===i&&(i=n),e[i]=t[n]}),s=this&&this.__setModuleDefault||(Object.create?function(e,t){Object.defineProperty(e,"default",{enumerable:!0,value:t})}:function(e,t){e.default=t}),o=this&&this.__importStar||function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)"default"!==n&&Object.prototype.hasOwnProperty.call(e,n)&&i(t,e,n);return s(t,e),t},a=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0}),t.LuxWidgetView=t.LuxModel=void 0;const l=n(134),r=n(8657);n(9259);const c=o(n(6271)),d=o(n(4456)),p=a(n(6486)),u=n(8650),h=a(n(935)),f=a(n(104)),g=n(6988),m=a(n(974)),b=a(n(8604)),x=a(n(8728));class v extends l.DOMWidgetModel{defaults(){return Object.assign(Object.assign({},super.defaults()),{_model_name:v.model_name,_model_module:v.model_module,_model_module_version:v.model_module_version,_view_name:v.view_name,_view_module:v.view_module,_view_module_version:v.model_module_version})}}t.LuxModel=v,v.serializers=Object.assign({},l.DOMWidgetModel.serializers),v.model_name="LuxModel",v.model_module=r.MODULE_NAME,v.model_module_version=r.MODULE_VERSION,v.view_name="LuxWidgetView",v.view_module=r.MODULE_NAME,v.view_module_version=r.MODULE_VERSION;class y extends l.DOMWidgetView{initialize(){let e=this;class t extends c.Component{constructor(e){super(e),this.chartComponents=Array(),this.handleCurrentVisSelect=e=>{this.setState({currentVisSelected:e},(()=>{-1==e?this.onListChanged(-1,null):this.onListChanged(-2,null)}))};for(var t=0;t<this.props.model.get("recommendations").length;t++)this.chartComponents.push(c.createRef());this.state={currentVis:e.model.get("current_vis"),recommendations:e.model.get("recommendations"),intent:e.model.get("intent"),selectedIntentIndex:{},message:e.model.get("message"),longDescription:this.generateDescription(null),tabItems:this.generateTabItems(),activeTab:e.activeTab,showAlert:!1,selectedRec:{},_selectedVisIdxs:{},deletedIndices:{},currentVisSelected:-2,openWarning:!1,openInfo:!1,plottingScale:e.model.get("plotting_scale")},this.handleCurrentVisSelect=this.handleCurrentVisSelect.bind(this),this.handleSelect=this.handleSelect.bind(this),this.exportSelection=this.exportSelection.bind(this),this.toggleWarningPanel=this.toggleWarningPanel.bind(this),this.deleteSelection=this.deleteSelection.bind(this),this.setIntent=this.setIntent.bind(this),this.closeExportInfo=this.closeExportInfo.bind(this),this.toggleInfoPanel=this.toggleInfoPanel.bind(this)}toggleWarningPanel(e){this.state.openWarning?(g.dispatchLogEvent("closeWarning",this.state.message),this.setState({openWarning:!1})):(g.dispatchLogEvent("openWarning",this.state.message),this.setState({openWarning:!0}))}toggleInfoPanel(e){this.state.openInfo?(g.dispatchLogEvent("closeInfo",this.state.longDescription),this.setState({openInfo:!1})):(g.dispatchLogEvent("openInfo",this.state.longDescription),this.setState({openInfo:!0}))}closeExportInfo(){g.dispatchLogEvent("closeExportInfo",null),this.setState({showAlert:!1})}onChange(e){this.setState(e.changed)}componentDidMount(){e.listenTo(e.model,"change",this.onChange.bind(this))}componentDidUpdate(){e.model.save_changes()}generateDescription(e){if(!e){if(!(this.props.model.get("recommendations").length>0))return"";e=this.props.model.get("recommendations")[0].action}var t="";for(var n of this.props.model.get("recommendations"))n.action===e&&(t=n.long_description);return t}handleSelect(e){e&&g.dispatchLogEvent("switchTab",e);var t=this.generateDescription(e);this.setState({activeTab:e,longDescription:t})}onListChanged(e,t){var n={};for(var i of(this.state.selectedRec[e]=t,Object.keys(this.state.selectedRec)))if(i in this.state.recommendations){var s=this.state.recommendations[i].action;this.state.selectedRec[i].length>0&&(n[s]=this.state.selectedRec[i])}else-1==this.state.currentVisSelected&&(n.currentVis=this.state.currentVis);this.setState({_selectedVisIdxs:n})}exportSelection(){g.dispatchLogEvent("exportBtnClick",this.state._selectedVisIdxs),this.setState((e=>({showAlert:!0}))),setTimeout((()=>{this.setState((e=>({showAlert:!1})))}),6e4),e.model.set("_selectedVisIdxs",this.state._selectedVisIdxs),e.model.save()}deleteSelection(){g.dispatchLogEvent("deleteBtnClick",this.state._selectedVisIdxs);var t=this.state._selectedVisIdxs;for(var n of this.state.recommendations)if(this.state._selectedVisIdxs[n.action]){let e=0;for(var i of this.state._selectedVisIdxs[n.action])n.vspec.splice(i-e,1),e++}this.setState({selectedRec:{},_selectedVisIdxs:{},deletedIndices:t});for(var s=0;s<this.props.model.get("recommendations").length;s++)this.chartComponents[s].current.removeDeletedCharts();e.model.set("deletedIndices",t),e.model.set("_selectedVisIdxs",{}),e.model.save()}setIntent(){if(g.dispatchLogEvent("intentBtnClick",this.state._selectedVisIdxs),1==Object.keys(this.state._selectedVisIdxs).length){var t=Object.keys(this.state._selectedVisIdxs)[0];if(1==this.state._selectedVisIdxs[t].length)return e.model.set("selectedIntentIndex",this.state._selectedVisIdxs),void e.model.save()}}generateTabItems(){return this.props.model.get("recommendations").map(((e,t)=>c.createElement(u.Tab,{eventKey:e.action,title:e.action},c.createElement(h.default,{key:"no refresh",ref:this.chartComponents[t],title:e.action,description:e.description,multiple:!0,maxSelectable:10,onChange:this.onListChanged.bind(this,t),graphSpec:e.vspec,currentVisShow:!p.default.isEmpty(this.props.model.get("current_vis")),plottingScale:this.props.model.get("plotting_scale")}))))}generateNoRecsWarning(){if(""!=this.state.message)return c.createElement("div",{id:"no-recs-footer",style:{display:"flex"}},c.createElement("div",{id:"no-recs",className:"fa fa-exclamation-triangle"}),c.createElement("div",null,c.createElement("p",{className:"warnMsgText",dangerouslySetInnerHTML:{__html:this.state.message.replace(/<[^>]+>/g,"")}})))}render(){var e=Object.keys(this.state._selectedVisIdxs).length>0,t=1==Object.keys(this.state._selectedVisIdxs).length&&1==Object.values(this.state._selectedVisIdxs)[0].length;const n=(320+160*(this.state.plottingScale-1)).toString()+"px";return 0==this.state.recommendations.length?c.createElement("div",{id:"oneViewWidgetContainer",style:{flexDirection:"column"}},c.createElement("div",{style:{display:"flex",flexDirection:"row",height:n}},c.createElement(f.default,{intent:this.state.intent,currentVisSpec:this.state.currentVis,numRecommendations:this.state.recommendations.length,onChange:this.handleCurrentVisSelect,plottingScale:this.state.plottingScale})),c.createElement(m.default,{buttonsEnabled:e,deleteSelection:this.deleteSelection,exportSelection:this.exportSelection,setIntent:this.setIntent,closeExportInfo:this.closeExportInfo,tabItems:this.state.tabItems,showAlert:this.state.showAlert,intentEnabled:t}),this.generateNoRecsWarning()):this.state.recommendations.length>0?c.createElement("div",{id:"widgetContainer",style:{flexDirection:"column"}},c.createElement("div",{style:{display:"flex",flexDirection:"row",height:n}},c.createElement(f.default,{intent:this.state.intent,currentVisSpec:this.state.currentVis,numRecommendations:this.state.recommendations.length,onChange:this.handleCurrentVisSelect,plottingScale:this.state.plottingScale}),c.createElement("div",{id:"tabBanner"},c.createElement("p",{className:"title-description",style:{visibility:p.default.isEmpty(this.state.currentVis)?"hidden":"visible"}},"You might be interested in..."),c.createElement(u.Tabs,{activeKey:this.state.activeTab,id:"tabBannerList",onSelect:this.handleSelect,className:p.default.isEmpty(this.state.currentVis)?"":"tabBannerPadding"},this.state.tabItems))),c.createElement(m.default,{buttonsEnabled:e,deleteSelection:this.deleteSelection,exportSelection:this.exportSelection,setIntent:this.setIntent,closeExportInfo:this.closeExportInfo,tabItems:this.state.tabItems,showAlert:this.state.showAlert,intentEnabled:t}),c.createElement(x.default,{message:this.state.longDescription,toggleInfoPanel:this.toggleInfoPanel,openInfo:this.state.openInfo}),c.createElement(b.default,{message:this.state.message,toggleWarningPanel:this.toggleWarningPanel,openWarning:this.state.openWarning})):void 0}}const n=document.createElement("div"),i=c.createElement(t,e);d.render(i,n),e.el.append(n),g.dispatchLogEvent("initWidget","")}}t.LuxWidgetView=y},1150:(e,t,n)=>{(t=n(3645)(!1)).push([e.id,".jp-OutputArea-output {\n    height: auto;\n    overflow: auto;\n    user-select: text;\n    -moz-user-select: text;\n    -webkit-user-select: text;\n    -ms-user-select: text;\n    width: 90%;\n    padding-bottom: 4px;\n  }\n  \n  #widgetContainer{\n    /* height: 315px; */\n    width:100%;\n    display:inline-flex;\n  }\n  \n  #oneViewWidgetContainer {\n    width:100%;\n    display:inline-flex;\n  }\n  input[type=text], select {\n    width: 100%;\n    padding: 12px 20px;\n    margin: 8px 0;\n    display: inline-block;\n    border: 1px solid #ccc;\n    border-radius: 4px;\n    box-sizing: border-box;\n  }\n  #mult-graph-container{\n    display: inline-flex;\n  }\n  .recommendationStaticContentOuter{\n    scroll-snap-align: start;\n    /* border: 0.5px solid #bcbdbd; */\n    /* overflow-x: auto; */\n    overflow-x: scroll;\n    overflow-y: hidden;\n    display: inline-block;\n    text-align: left;\n    /* padding-left: 20px; */\n    /* padding-top: 10px; */\n    /* height: 100%; */\n    box-sizing: border-box;\n    width: 100%;\n    position: relative;\n  }\n  .recommendationContentOuter{\n    overflow-x: scroll;\n    /* Prevents unneccesary x-scroll for specified facet */\n    /* width:  100%; */\n    /*height: 225px;*/\n    display: flex;\n    /* display: inline-block;*/\n    margin-left: 10px;\n    text-align: left;\n  }\n  .vega-embed {\n    position: relative;\n    display: inline-block;\n    /* padding-right: 38px; */\n    flex: 1 0 auto;\n    padding-right: 10px !important;\n  }\n  /* .vega-embed:hover{\n    border: solid 1px;\n    border-color: rgba(0, 0, 0, 0.4);\n    box-shadow: 5px 5px 5px 0px rgba(0,0,0,0.5);\n    cursor: pointer;\n  }   */\n  .vega-embed:checked{\n    border: solid 1px;\n    border-color: blue;\n  }\n  .recommendationContentInner{\n    /*width: auto;\n    max-width: 150%;*/\n    /*display: inline-block;*/\n    /*margin-left: 8px;*/\n    text-align: left;\n    display: flex;\n    flex-wrap: nowrap;\n    align-items: flex-end;\n    /* overflow-x: auto; */\n    /* overflow-x: initial; */\n    overflow-x: scroll;\n    padding-right: 50px;\n    /*height: 280px;*/\n    /* width: max-content;\n    overflow-x: auto; */\n    /* height: 100px; */\n  }\n  \n  .toolDiv{\n    position: relative;\n    top: -20px;\n    left: -5px;\n  }\n  .fa {\n    color:gray;\n  }\n  .fa:hover{\n    color:black;\n  }\n  \n  .graph-container{\n    height: 245px;\n    max-height: 270px;\n    margin: 10px 0px 0px 5px;\n    padding: 0px 0px 0px 0px;\n  }\n  #mainVizTitle{\n    font-size: 20px;\n    display: inline-block;\n    left: 10%;\n    top: 0px;\n    position: absolute;\n  }\n  #mainVizContainer{\n    padding: 10px 0px 0px 0px;\n    border: 0.5px solid #bcbdbd;\n    overflow-y: auto;\n  }\n  \n  #mainVizInnerContainer{\n    margin-top: 50px;\n  }\n  \n  #placeHolderVizContainer{\n    min-height: 100%;\n    min-width: 1px;\n  }\n  #tabBanner{\n    border: 0.5px solid #bcbdbd;\n    width: auto;\n    overflow: hidden;\n    flex: 1;\n  }\n  #exportBtn{\n    position: absolute;\n    /* bottom: 90%; */\n    /* left: 97%; */\n    top: 5px;\n    right: 5px;\n    font-size: 20px;\n    padding: 5px;\n  }\n  \n  #deleteBtn{\n    position: absolute;\n    top: 5px;\n    right: 33px;\n    font-size: 20px;\n    padding: 5px;\n  }\n  \n  #intentBtn{\n    position: absolute;\n    top: 5px;\n    right: 59px;\n    font-size: 20px;\n    padding: 5px;\n  }\n  \n  #alertBox{\n    position: absolute;\n    left: 23%;\n    width: 54%;\n    bottom: 6%;\n    padding: 5px 30px 5px 10px;\n  }\n  \n  /* \n    JupyterLab does support bootstrap, so need to add bootstrap css\n    https://gist.github.com/EvanHerman/315952ebf371cb83ee9db6c54499933d\n  */\n  \n  .alert {\n    padding: 15px;\n    margin-bottom: 20px;\n    border: 1px solid transparent;\n    border-radius: 4px;\n  }\n  \n  .alert-dismissable .close,\n  .alert-dismissible .close {\n    position: relative;\n    top: -2px;\n    right: -21px;\n    color: inherit;\n  }\n  \n  .alert-dismissable,\n  .alert-dismissible {\n    padding-right: 35px;\n  }\n  \n  button.close {\n    padding: 0;\n    cursor: pointer;\n    background: transparent;\n    border: 0;\n    -webkit-appearance: none;\n    appearance: none;\n  }\n  \n  .close {\n    float: right;\n    font-size: 19.5px;\n    font-weight: bold;\n    line-height: 1;\n    color: #000;\n    text-shadow: 0 1px 0 #fff;\n    filter: alpha(opacity=20);\n    opacity: 0.2;\n  }\n  \n  .alert-info {\n    background-color: #d9edf7;\n    border-color: #bce8f1;\n    color: #31708f;\n  }\n  \n  /* canvas{\n    width: 229px;\n    height: 245px;\n  } */\n  /* Override .fade default to show tab*/\n  .fade {\n    opacity:1;\n  }\n  /* Copied from bootstrap.css */\n  .nav {\n    display: -ms-flexbox;\n    display: flex;\n    -ms-flex-wrap: wrap;\n    flex-wrap: wrap;\n    padding-left: 0;\n    margin-bottom: 0;\n    list-style: none;\n  }\n  \n  .nav-link {\n    display: block;\n    padding: 0.5rem 1rem;\n  }\n  \n  .nav-link:hover, .nav-link:focus {\n    text-decoration: none;\n  }\n  \n  .nav-link.disabled {\n    color: #6c757d;\n    pointer-events: none;\n    cursor: default;\n  }\n  \n  .nav-tabs {\n    border-bottom: 1px solid #dee2e6;\n  }\n  \n  .tabBannerPadding {\n    padding-left: 210px;\n  }\n  \n  .nav-tabs .nav-item {\n    margin-bottom: -1px;\n  }\n  \n  .nav-tabs .nav-link {\n    border: 1px solid transparent;\n    border-top-left-radius: 0.25rem;\n    border-top-right-radius: 0.25rem;\n  }\n  \n  .nav-tabs .nav-link:hover, .nav-tabs .nav-link:focus {\n    border-color: #e9ecef #e9ecef #dee2e6;\n  }\n  \n  .nav-tabs .nav-link.disabled {\n    color: #6c757d;\n    background-color: transparent;\n    border-color: transparent;\n  }\n  \n  .nav-tabs .nav-link.active,\n  .nav-tabs .nav-item.show .nav-link {\n    color: #495057;\n    background-color: #fff;\n    border-color: #dee2e6 #dee2e6 #fff;\n    font-weight: 500;\n  }\n  \n  .nav-tabs .dropdown-menu {\n    margin-top: -1px;\n    border-top-left-radius: 0;\n    border-top-right-radius: 0;\n  }\n  \n  .nav-pills .nav-link {\n    border-radius: 0.25rem;\n  }\n  \n  .nav-pills .nav-link.active,\n  .nav-pills .show > .nav-link {\n    color: #fff;\n    background-color: #007bff;\n  }\n  \n  .nav-fill .nav-item {\n    -ms-flex: 1 1 auto;\n    flex: 1 1 auto;\n    text-align: center;\n  }\n  \n  .nav-justified .nav-item {\n    -ms-flex-preferred-size: 0;\n    flex-basis: 0;\n    -ms-flex-positive: 1;\n    flex-grow: 1;\n    text-align: center;\n  }\n  \n  .tab-content > .tab-pane {\n    display: none;\n  }\n  \n  .tab-content > .active {\n    display: block;\n  }\n  /* Selectable Card React Component  CSS */\n  /* Card */\n  .card {\n    transition: all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);\n    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);\n    background: #fff;\n    margin: 20px 10px;\n    cursor: pointer;\n  }\n  .card:hover {\n    box-shadow: 0 14px 28px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.22);\n  }\n  /* Selectable */\n  .card .selectable {\n    position: relative;\n    transition: all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);\n    border: 4px solid transparent;\n  }\n  .card .selectable .check {\n    transition: all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);\n    position: absolute;\n    top: 0;\n    right: 0;\n    z-index: 10;\n    width: 20px;\n    height: 20px;\n  }\n  .card .selectable .check:before {\n    transition: all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);\n    content: '';\n    border: 20px solid;\n    border-color: transparent;\n    position: absolute;\n    top: 0;\n    right: 0;\n    z-index: -1;\n  }\n  .card .selectable .check .checkmark {\n    display: block;\n    font: 20px sans-serif;\n    line-height: 20px;\n    text-align: center;\n    color: transparent;\n  }\n  .card .selectable.selected {\n    border-color: #4ad;\n  }\n  .card .selectable.selected .check:before {\n    border-color: #4ad #4ad rgba(0, 0, 255, 0) rgba(255, 0, 0, 0);\n  }\n  .card .selectable.selected .check .checkmark {\n    color: #fff;\n  }\n  .content {\n    padding: 24px;\n  }\n  .content .title, .content .description {\n    margin: 0;\n    padding: 4px;\n  }\n  .column {\n    float: left;\n    width: 50%;\n  }\n  .column > .title {\n    text-align: center;\n  }\n  button.card {\n    display: block;\n    cursor: pointer;\n    width: 180px;\n    margin: 20px auto;\n    text-align: center;\n    padding: 16px;\n    border-color: transparent;\n    border-radius: 10px;\n    background: #4ad !important;\n    color: #fff;\n    text-transform: uppercase;\n    font-weight: bold;\n    outline: none;\n  }\n  button.card:focus {\n    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);\n  }\n  .title-description{\n    line-height: 2;\n    font-weight: 500;\n    margin-left: 15px;\n    margin-bottom: -27px;\n    color: rgb(0, 0, 0);\n    margin-top: 5px;\n  }\n  .text-description {\n    line-height: 2.5;\n    margin-left: 15px;\n    margin-bottom: -25px;\n    color: rgb(80, 80, 80);\n    margin-top: 0px; \n  }\n  .text-container-style {\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    margin-bottom: -35px;\n  }\n  .warning-footer {\n    padding: 10px;\n    border: 0.5px solid #bcbdbd;\n    background-color: lightyellow;\n    display: flex;\n    flex-direction: row;\n    border-top: 0px;\n  }\n  .info-footer {\n    padding: 10px;\n    border: 0.5px solid #bcbdbd;\n    background-color: rgb(206, 228, 255);\n    display: flex;\n    flex-direction: row;\n    border-top: 0px;\n    position: relative;\n  }\n  #no-recs-footer {\n    padding: 10px;\n    border: 0.5px solid #bcbdbd;\n    background-color: lightyellow;\n    display: flex;\n    flex-direction: row;\n    position: relative;\n  }\n  #no-recs {\n    color: #ffbc00;\n    pointer-events: none;\n    position: relative;\n    top: 5px;\n    left: px;\n    font-size: 25px;\n    padding: 5px;\n  }\n  #no-recs-text {\n    color: rgb(80, 80, 80);\n    font-size: 20px;\n    margin-top: 5px;\n    margin-left: 5px;\n    margin-right: 30px;\n  }\n  #scroll-indicator {\n    margin-right: 10px;\n    margin-top:  5px;\n    text-align: right;\n    color: rgb(80, 80, 80);\n    font-weight: 700;\n    z-index: 0;\n    position: relative;\n    margin-bottom: 15px;\n  }\n  #scroll-indicator-background {\n    z-index: 0;\n    position: relative;\n    background-color: rgba(250, 250, 250, 0.8);\n    /* width: 210px; */\n    height: 25px;\n    float: right;\n    margin-top: -26px;\n  }\n  /* This forces the toggle button to overlap with widget.Output (main widget). This may leak to other .widget-button if there are non-Lux widgets in the notebook. */\n  /* .widget-button{  \n    position: absolute;\n    z-index: 999;\n    border-radius: 5px;\n  } */\n  \n  #first-arrow{\n    margin-left: 25px;\n    opacity: 50%;\n  }\n  \n  #second-arrow{\n    margin-left: -4px;\n  }\n  \n  .highlight-intent{\n    font-weight: 500;\n    background: aliceblue;\n    display: inline;\n    /* display: inline-table;\n    text-align: left; */\n  }\n  .highlight-descriptor{\n    font-weight: 500;\n    background: #fffee1;\n    display: inline;\n    /* display: inline-table;\n    text-align: left; */\n  }\n  #intent_str {\n    margin-top: 5px;\n    font-weight: 500;\n    max-width:100px\n  }\n  \n  #warnBtn{\n    color: #ffbc00;\n    position: absolute;\n    top: 5px;\n    right: 88px;\n    font-size: 20px;\n    padding: 5px;\n  }\n  #warnBtn:hover{\n    color:black;\n  }\n  .warnMsgText{\n    color: rgb(80, 80, 80);\n    margin-top: 5px;\n    margin-left: 5px;\n    margin-right: 30px;\n  }\n  #infoBtn{\n    position: absolute;\n    top: 45px;\n    right: 5px;\n    font-size: 20px;\n    padding: 5px;\n  }\n  .infoMsgText{\n    color: rgb(80, 80, 80);\n    margin-top: 5px;\n    margin-left: 30px;\n    margin-right: 30px;\n  }\n  \n  #cur-img {\n    all: revert;\n  }\n  \n  #gal-img {\n    all: revert;\n  }\n  ",""]),e.exports=t},9259:(e,t,n)=>{var i=n(3379),s=n(1150);"string"==typeof(s=s.__esModule?s.default:s)&&(s=[[e.id,s,""]]);i(s,{insert:"head",singleton:!1}),e.exports=s.locals||{}},306:e=>{"use strict";e.exports=JSON.parse('{"name":"luxwidget","version":"0.1.7","description":"A Custom Jupyter Widget Library","keywords":["jupyter","jupyterlab","jupyterlab-extension","widgets"],"files":["webpack.config.js","tsconfig.json","luxwidget/*.py","luxwidget/nbextension/static/*","luxwidget/labextension/static/*","luxwidget/labextension/package.json","*.py","src/*.tsx","src/*.ts","lib/**/*.js","lib/**/*.ts","dist/*.js","style/index.js","style/*.css"],"homepage":"https://github.com/lux-org/lux-widget","bugs":{"url":"https://github.com/lux-org/lux-widget/issues"},"license":"Apache-2.0","author":{"name":"Doris Jung-Lin Lee","email":"dorisjunglinlee@gmail.com"},"main":"lib/index.js","types":"./lib/index.d.ts","repository":{"type":"git","url":"https://github.com/lux-org/lux-widget"},"scripts":{"build":"jlpm run build:lib && jlpm run build:labextension:dev","build:prod":"jlpm run build:lib && jlpm run build:labextension","build:labextension":"jupyter labextension build .","build:labextension:dev":"jupyter labextension build --development True .","build:lib":"tsc","clean":"jlpm run clean:lib","clean:lib":"rimraf lib tsconfig.tsbuildinfo","clean:labextension":"rimraf {{ cookiecutter.python_name }}/labextension","clean:all":"jlpm run clean:lib && jlpm run clean:labextension","eslint":"eslint . --ext .ts,.tsx --fix","eslint:check":"eslint . --ext .ts,.tsx","install:extension":"jupyter labextension develop --overwrite .","prepare":"jlpm run clean && jlpm run build:prod","watch":"run-p watch:src watch:labextension","watch:src":"tsc -w","watch:labextension":"jupyter labextension watch ."},"dependencies":{"@jupyter-widgets/base":"^3 || ^4.0.0","@material-ui/core":"^4.11.0","bootstrap":"^4.4.1","detect-libc":"^1.0.3","jquery":"^3.4.1","needle":"^2.4.0","nopt":"^4.0.1","rc":"^1.2.8","react":"^17.0.1","react-bootstrap":"^1.0.0-beta.16","react-dom":"^17.0.1","react-vega":"7.1.1","vega":"^5.9.0","vega-embed":"^6.2.1","vega-lite":"^4.0.2"},"devDependencies":{"@babel/preset-react":"^7.7.4","@jupyterlab/builder":"^3.0.0","@lumino/application":"^1.13.1","@lumino/widgets":"^1.16.1","@types/expect.js":"^0.3.29","@types/jquery":"^3.5.4","@types/mocha":"^5.2.5","@types/node":"^10.11.6","@types/react":"^16.9.16","@types/react-dom":"^16.9.4","@types/webpack-env":"^1.13.6","@typescript-eslint/eslint-plugin":"^4.8.1","@typescript-eslint/parser":"^4.8.1","css-loader":"^3.2.0","eslint":"^7.14.0","eslint-config-prettier":"^6.15.0","eslint-plugin-prettier":"^3.1.4","expect.js":"^0.3.1","fs-extra":"^7.0.0","mkdirp":"^0.5.1","mocha":"^5.2.0","npm-run-all":"^4.1.5","prettier":"^2.1.1","rimraf":"^3.0.2","source-map-loader":"^0.2.4","style-loader":"^1.0.0","ts-loader":"^6.2.1","typescript":"~4.1.3","webpack":"^4.46.0","webpack-cli":"^3.3.12"},"jupyterlab":{"extension":"lib/plugin","outputDir":"luxwidget/labextension"},"presets":["@babel/preset-env","@babel/preset-react"],"styleModule":"style/index.js"}')}}]);