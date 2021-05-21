(self["webpackChunkluxwidget"] = self["webpackChunkluxwidget"] || []).push([["lib_widget_js"],{

/***/ "./lib/buttonsBroker.js":
/*!******************************!*\
  !*** ./lib/buttonsBroker.js ***!
  \******************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
const react_1 = __importStar(__webpack_require__(/*! react */ "webpack/sharing/consume/default/react"));
const react_bootstrap_1 = __webpack_require__(/*! react-bootstrap */ "webpack/sharing/consume/default/react-bootstrap/react-bootstrap");
class ButtonsBroker extends react_1.Component {
    constructor(props) {
        super(props);
    }
    render() {
        const { buttonsEnabled, tabItems, deleteSelection, exportSelection, setIntent, closeExportInfo, showAlert, intentEnabled } = this.props;
        let deleteBtn;
        let exportBtn;
        let intentBtn;
        let alertBox;
        if (tabItems.length > 0) {
            if (buttonsEnabled) {
                deleteBtn = react_1.default.createElement("i", { id: "deleteBtn", className: "fa fa-trash", title: 'Delete selected visualizations', onClick: () => deleteSelection() });
                exportBtn = react_1.default.createElement("i", { id: "exportBtn", className: 'fa fa-upload', title: 'Export selected visualizations into variable', onClick: (e) => exportSelection() });
            }
            else {
                deleteBtn = react_1.default.createElement("i", { id: "deleteBtn", className: "fa fa-trash", style: { opacity: 0.2, cursor: 'not-allowed' }, title: 'Select one or more visualizations to delete' });
                exportBtn = react_1.default.createElement("i", { id: "exportBtn", className: 'fa fa-upload', style: { opacity: 0.2, cursor: 'not-allowed' }, title: 'Select one or more visualizations to export into variable' });
            }
            if (buttonsEnabled && intentEnabled) {
                intentBtn = react_1.default.createElement("i", { id: "intentBtn", className: "fa fa-search", title: 'Set selected visualization as intent', onClick: () => setIntent() });
            }
            else {
                intentBtn = react_1.default.createElement("i", { id: "intentBtn", className: "fa fa-search", style: { opacity: 0.2, cursor: 'not-allowed' }, title: 'Select no more than one visualization to set as intent' });
            }
        }
        if (showAlert) {
            alertBox = react_1.default.createElement(react_bootstrap_1.Alert, { id: "alertBox", key: "infoAlert", variant: "info", onClose: () => closeExportInfo(), dismissible: true },
                "Access exported visualizations via the property `exported` (",
                react_1.default.createElement("a", { href: "https://lux-api.readthedocs.io/en/latest/source/guide/export.html", target: "_blank" }, "More details"),
                ")");
        }
        return (react_1.default.createElement("div", null,
            deleteBtn,
            alertBox,
            intentBtn,
            exportBtn));
    }
}
exports.default = ButtonsBroker;
//# sourceMappingURL=buttonsBroker.js.map

/***/ }),

/***/ "./lib/chartGallery.js":
/*!*****************************!*\
  !*** ./lib/chartGallery.js ***!
  \*****************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

//  Copyright 2019-2020 The Lux Authors.
// 
//  Licensed under the Apache License, Version 2.0 (the "License");
//  you may not use this file except in compliance with the License.
//  You may obtain a copy of the License at
//
//      http://www.apache.org/licenses/LICENSE-2.0
//
//  Unless required by applicable law or agreed to in writing, software
//  distributed under the License is distributed on an "AS IS" BASIS,
//  WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
//  See the License for the specific language governing permissions and
//  limitations under the License.
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
const react_1 = __importStar(__webpack_require__(/*! react */ "webpack/sharing/consume/default/react"));
const selectableCard_1 = __importDefault(__webpack_require__(/*! ./selectableCard */ "./lib/selectableCard.js"));
const react_vega_1 = __webpack_require__(/*! react-vega */ "webpack/sharing/consume/default/react-vega/react-vega");
const scrollableContent_1 = __importDefault(__webpack_require__(/*! ./scrollableContent */ "./lib/scrollableContent.js"));
const utils_1 = __webpack_require__(/*! ./utils */ "./lib/utils.js");
class ChartGalleryComponent extends react_1.Component {
    constructor(props) {
        super(props);
        var selected = props.multiple ? [] : -1;
        var initialState = {
            selected: selected,
        };
        this.state = initialState;
    }
    onItemSelected(index) {
        // Implementation based on https://codepen.io/j-burgos/pen/VpQxLv
        this.setState((prevState, props) => {
            if (props.multiple) {
                var selectedIndexes = prevState.selected;
                var selectedIndex = selectedIndexes.indexOf(index);
                if (selectedIndex > -1) {
                    // dispatchLogEvent("unclickVis",{"tabTitle":this.props.title,"index":index,"vis":this.props.graphSpec[index]});
                    utils_1.dispatchLogEvent("unclickVis", { "tabTitle": this.props.title, "index": index,
                        "title": this.props.graphSpec[index]['title'],
                        "mark": this.props.graphSpec[index]['mark'],
                        "encoding": this.props.graphSpec[index]['encoding'] });
                    selectedIndexes = selectedIndexes.filter(item => item != index);
                    props.onChange(selectedIndexes);
                }
                else {
                    // dispatchLogEvent("clickVis",{"tabTitle":this.props.title,"index":index,"vis":this.props.graphSpec[index]});
                    utils_1.dispatchLogEvent("clickVis", { "tabTitle": this.props.title, "index": index,
                        "title": this.props.graphSpec[index]['title'],
                        "mark": this.props.graphSpec[index]['mark'],
                        "encoding": this.props.graphSpec[index]['encoding'] });
                    if (!(selectedIndexes.length >= props.maxSelectable)) {
                        selectedIndexes.push(index);
                        props.onChange(selectedIndexes);
                    }
                }
                return {
                    selected: selectedIndexes
                };
            }
            else {
                utils_1.dispatchLogEvent("clickVis", index);
                props.onChange(index);
                return {
                    selected: index
                };
            }
        });
    }
    removeDeletedCharts() {
        this.setState({ selected: [] });
    }
    render() {
        return (react_1.default.createElement("div", { className: "chartGalleryTabContent" },
            react_1.default.createElement("p", { className: "text-description", dangerouslySetInnerHTML: { __html: this.props.description } }),
            react_1.default.createElement(scrollableContent_1.default, { galleryItems: this.props.graphSpec.map((item, idx) => react_1.default.createElement("div", { key: idx.toString(), className: "graph-container", id: "graph-container-".concat(idx.toString()) }, this.state.selected.indexOf(idx) > -1 ?
                    react_1.default.createElement(selectableCard_1.default, { key: idx, selected: true, onClick: (e) => { this.onItemSelected(idx); } }, 'vislib' in item && 'config' in item && JSON.stringify(item['vislib']).substring(1, JSON.stringify(item['vislib']).length - 1) === 'matplotlib' ?
                        react_1.default.createElement("img", { id: "gal-img", src: "data:image/png;base64," + JSON.stringify(item['config']).substring(1, JSON.stringify(item['config']).length - 1) + "\ ", style: { height: `${160 * this.props.plottingScale}px`, width: `${185 * this.props.plottingScale}px` } }) :
                        react_1.default.createElement(react_vega_1.VegaLite, { spec: item, padding: { left: 10, top: 5, right: 5, bottom: 5 }, actions: false }))
                    :
                        react_1.default.createElement(selectableCard_1.default, { key: idx, selected: false, onClick: (e) => { this.onItemSelected(idx); } }, 'vislib' in item && 'config' in item && JSON.stringify(item['vislib']).substring(1, JSON.stringify(item['vislib']).length - 1) === 'matplotlib' ?
                            react_1.default.createElement("img", { id: "gal-img", src: "data:image/png;base64," + JSON.stringify(item['config']).substring(1, JSON.stringify(item['config']).length - 1) + "\ ", style: { height: `${160 * this.props.plottingScale}px`, width: `${185 * this.props.plottingScale}px` } }) :
                            react_1.default.createElement(react_vega_1.VegaLite, { spec: item, padding: { left: 10, top: 5, right: 5, bottom: 5 }, actions: false })))), title: this.props.title, currentVisShow: this.props.currentVisShow, plottingScale: this.props.plottingScale })));
    }
}
exports.default = ChartGalleryComponent;
//# sourceMappingURL=chartGallery.js.map

/***/ }),

/***/ "./lib/currentVis.js":
/*!***************************!*\
  !*** ./lib/currentVis.js ***!
  \***************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

//  Copyright 2019-2020 The Lux Authors.
// 
//  Licensed under the Apache License, Version 2.0 (the "License");
//  you may not use this file except in compliance with the License.
//  You may obtain a copy of the License at
//
//      http://www.apache.org/licenses/LICENSE-2.0
//
//  Unless required by applicable law or agreed to in writing, software
//  distributed under the License is distributed on an "AS IS" BASIS,
//  WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
//  See the License for the specific language governing permissions and
//  limitations under the License.
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
const react_1 = __importStar(__webpack_require__(/*! react */ "webpack/sharing/consume/default/react"));
const react_vega_1 = __webpack_require__(/*! react-vega */ "webpack/sharing/consume/default/react-vega/react-vega");
const selectableCard_1 = __importDefault(__webpack_require__(/*! ./selectableCard */ "./lib/selectableCard.js"));
const lodash_1 = __importDefault(__webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js"));
const styles_1 = __webpack_require__(/*! @material-ui/core/styles */ "./node_modules/@material-ui/core/esm/styles/index.js");
const Button_1 = __importDefault(__webpack_require__(/*! @material-ui/core/Button */ "./node_modules/@material-ui/core/esm/Button/index.js"));
const Tooltip_1 = __importDefault(__webpack_require__(/*! @material-ui/core/Tooltip */ "./node_modules/@material-ui/core/esm/Tooltip/index.js"));
class CurrentVisComponent extends react_1.Component {
    constructor(props) {
        super(props);
        var initialState = {
            selected: -1
        };
        this.state = initialState;
    }
    onItemSelected() {
        if (this.state.selected == 0) {
            this.setState({
                selected: -1
            });
            this.props.onChange(-2);
        }
        else {
            this.setState({
                selected: 0
            });
            this.props.onChange(-1);
        }
    }
    render() {
        if (!lodash_1.default.isEmpty(this.props.currentVisSpec)) {
            var vislib = "vegalite";
            var img_str = "";
            if ('vislib' in this.props.currentVisSpec && 'config' in this.props.currentVisSpec) {
                vislib = JSON.stringify(this.props.currentVisSpec['vislib']);
                vislib = vislib.substring(1, vislib.length - 1);
                const png_string = JSON.stringify(this.props.currentVisSpec['config']);
                img_str = "data:image/png;base64," + png_string.substring(1, png_string.length - 1) + "\ ";
            }
            if (this.props.numRecommendations == 0) {
                return (react_1.default.createElement("div", { className: "vizContainer", style: { display: 'flex', justifyContent: 'center', width: '320px' } }, vislib === 'matplotlib' ?
                    react_1.default.createElement("img", { id: "cur-img", src: img_str, style: { height: `${160 * this.props.plottingScale}px`, width: `${185 * this.props.plottingScale}px` } }) :
                    react_1.default.createElement(react_vega_1.VegaLite, { spec: this.props.currentVisSpec, padding: { left: 0, top: 5, right: 5, bottom: 5 }, actions: false })));
            }
            else {
                const styles = {
                    tooltip: {
                        width: "100px",
                        fontSize: "13px",
                        marginTop: "10px",
                        textAlign: 'center'
                    }
                };
                const CustomTooltip = styles_1.withStyles(styles)(Tooltip_1.default);
                const width = (300 + (this.props.plottingScale - 1) * 185).toString() + "px";
                return (react_1.default.createElement("div", { id: "mainVizContainer", style: { width: width } },
                    react_1.default.createElement("div", null, this.props.currentVisSpec["allcols"] ?
                        react_1.default.createElement("div", { className: "text-container-style" },
                            react_1.default.createElement("p", { className: "title-description", style: { fontSize: '20px', height: '15px', display: 'inline', top: '10px', left: '20px' } }, "Dataframe Visualization"),
                            react_1.default.createElement("p", { className: "text-description", style: { top: '40px', left: '10px', marginTop: '40px' } }, "based on all columns in the dataframe")) :
                        react_1.default.createElement("div", { className: "text-container-style" },
                            react_1.default.createElement("p", { className: "title-description", style: { fontSize: '20px', height: '15px', display: 'inline', top: '10px', left: '40px' } }, "Current Visualization"),
                            react_1.default.createElement("p", { className: "text-description", style: { top: '40px', left: '40px', marginTop: '40px' } },
                                "based on user specified\u00A0",
                                react_1.default.createElement(CustomTooltip, { title: this.props.intent, arrow: true },
                                    react_1.default.createElement(Button_1.default, { style: { fontSize: "13px", minWidth: "0px", padding: "0px", background: "aliceblue", textTransform: "none", borderBottom: "1px dotted #505050" } }, "intent"))))),
                    react_1.default.createElement("div", { id: "mainVizInnerContainer" },
                        react_1.default.createElement("div", { className: "vizContainer", style: { display: 'flex', justifyContent: 'center' } },
                            react_1.default.createElement(selectableCard_1.default, { key: 0, selected: this.state.selected > -1, onClick: (e) => this.onItemSelected() }, vislib === 'matplotlib' ?
                                react_1.default.createElement("img", { id: "cur-img", src: img_str, style: { height: `${160 * this.props.plottingScale}px`, width: `${185 * this.props.plottingScale}px` } }) :
                                react_1.default.createElement(react_vega_1.VegaLite, { spec: this.props.currentVisSpec, padding: { left: 10, top: 5, right: 5, bottom: 5 }, width: 185 * this.props.plottingScale, height: 160 * this.props.plottingScale, actions: false }))))));
            }
        }
        else {
            return (react_1.default.createElement("div", { className: "placeHolderVizContainer" }));
        }
    }
}
exports.default = CurrentVisComponent;
//# sourceMappingURL=currentVis.js.map

/***/ }),

/***/ "./lib/infoBtn.js":
/*!************************!*\
  !*** ./lib/infoBtn.js ***!
  \************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
const react_1 = __importStar(__webpack_require__(/*! react */ "webpack/sharing/consume/default/react"));
class InfoBtn extends react_1.Component {
    constructor(props) {
        super(props);
    }
    render() {
        const { message, toggleInfoPanel, openInfo } = this.props;
        let infoBtn;
        let infoMsg;
        if (message != "") {
            infoBtn = react_1.default.createElement("i", { id: "infoBtn", className: 'fa fa-info-circle', onClick: (e) => toggleInfoPanel(e) });
            infoMsg = react_1.default.createElement("div", { className: "info-footer", style: { display: (openInfo) ? 'flex' : 'none' } },
                react_1.default.createElement("p", { className: "infoMsgText", dangerouslySetInnerHTML: { __html: message } }));
        }
        return (react_1.default.createElement("span", null,
            infoBtn,
            infoMsg));
    }
}
exports.default = InfoBtn;
//# sourceMappingURL=infoBtn.js.map

/***/ }),

/***/ "./lib/scrollableContent.js":
/*!**********************************!*\
  !*** ./lib/scrollableContent.js ***!
  \**********************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

//  Copyright 2019-2020 The Lux Authors.
// 
//  Licensed under the Apache License, Version 2.0 (the "License");
//  you may not use this file except in compliance with the License.
//  You may obtain a copy of the License at
//
//      http://www.apache.org/licenses/LICENSE-2.0
//
//  Unless required by applicable law or agreed to in writing, software
//  distributed under the License is distributed on an "AS IS" BASIS,
//  WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
//  See the License for the specific language governing permissions and
//  limitations under the License.
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
const react_1 = __importStar(__webpack_require__(/*! react */ "webpack/sharing/consume/default/react"));
const utils_1 = __webpack_require__(/*! ./utils */ "./lib/utils.js");
class ScrollableContent extends react_1.Component {
    constructor(props) {
        super(props);
        this.state = {
            isScrolling: false,
            firstScroll: true,
            scrollIndicator: true,
        };
        this.handleScroll = this.handleScroll.bind(this);
        this.scrollStartStopListener = this.scrollStartStopListener.bind(this);
    }
    handleScroll(event) {
        this.setState({
            scrollIndicator: false,
        });
        var component = this;
        this.scrollStartStopListener(function () {
            utils_1.dispatchLogEvent("stopScroll", component.props.title);
            component.setState({
                firstScroll: true,
            });
        });
    }
    scrollStartStopListener(callback) {
        if (!callback || typeof callback !== 'function')
            return;
        if (this.state.firstScroll) {
            utils_1.dispatchLogEvent("startScroll", this.props.title);
            this.setState({
                firstScroll: false,
            });
        }
        window.clearTimeout(this.state.isScrolling); // Clear our timeout throughout the scroll
        // Set timeout to run after scrolling ends --> after timeout, set `isScrolling` 
        this.setState({
            isScrolling: setTimeout(function () {
                callback();
            }, 60)
        });
    }
    ;
    render() {
        let shouldShowScrollIndicator = false;
        let numMoreCharts = this.props.galleryItems.length;
        if (this.props.currentVisShow && this.props.galleryItems.length > 2) {
            shouldShowScrollIndicator = true;
            numMoreCharts -= 2;
        }
        else if (!this.props.currentVisShow && this.props.galleryItems.length > 3) {
            shouldShowScrollIndicator = true;
            numMoreCharts -= 3;
        }
        var scrollDescription;
        if (numMoreCharts == 1) {
            scrollDescription = "Scroll for " + numMoreCharts + " more chart";
        }
        else {
            scrollDescription = "Scroll for " + numMoreCharts + " more charts";
        }
        const height = (130 + (this.props.plottingScale * 160)).toString() + "px";
        return (react_1.default.createElement("div", { id: "staticOuterDiv", style: { height: height }, className: "recommendationStaticContentOuter", onScroll: this.handleScroll },
            react_1.default.createElement("div", { id: "mult-graph-container", className: "recommendationContentInner" }, this.props.galleryItems),
            react_1.default.createElement("div", { id: "scroll-indicator-background", style: { visibility: this.state.scrollIndicator && shouldShowScrollIndicator ? 'visible' : 'hidden' } },
                react_1.default.createElement("p", { id: "scroll-indicator", style: { visibility: this.state.scrollIndicator && shouldShowScrollIndicator ? 'visible' : 'hidden' } },
                    scrollDescription,
                    react_1.default.createElement("i", { id: 'first-arrow', className: 'fa fa-chevron-right' }),
                    react_1.default.createElement("i", { id: 'second-arrow', className: 'fa fa-chevron-right' }),
                    " "))));
    }
}
exports.default = ScrollableContent;
//# sourceMappingURL=scrollableContent.js.map

/***/ }),

/***/ "./lib/selectableCard.js":
/*!*******************************!*\
  !*** ./lib/selectableCard.js ***!
  \*******************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

//  Copyright 2019-2020 The Lux Authors.
// 
//  Licensed under the Apache License, Version 2.0 (the "License");
//  you may not use this file except in compliance with the License.
//  You may obtain a copy of the License at
//
//      http://www.apache.org/licenses/LICENSE-2.0
//
//  Unless required by applicable law or agreed to in writing, software
//  distributed under the License is distributed on an "AS IS" BASIS,
//  WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
//  See the License for the specific language governing permissions and
//  limitations under the License.
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
const react_1 = __importDefault(__webpack_require__(/*! react */ "webpack/sharing/consume/default/react"));
class SelectableCard extends react_1.default.Component {
    render() {
        var isSelected = this.props.selected ? "selected" : "";
        var className = "selectable " + isSelected;
        return (react_1.default.createElement("div", { className: "card", style: { display: 'inline-block' } },
            react_1.default.createElement("div", { className: className, onClick: this.props.onClick },
                this.props.children,
                react_1.default.createElement("div", { className: "check" },
                    react_1.default.createElement("span", { className: "checkmark" }, "\u2714")))));
    }
}
exports.default = SelectableCard;
//# sourceMappingURL=selectableCard.js.map

/***/ }),

/***/ "./lib/utils.js":
/*!**********************!*\
  !*** ./lib/utils.js ***!
  \**********************/
/***/ ((__unused_webpack_module, exports) => {

"use strict";

//  Copyright 2019-2020 The Lux Authors.
// 
//  Licensed under the Apache License, Version 2.0 (the "License");
//  you may not use this file except in compliance with the License.
//  You may obtain a copy of the License at
//
//      http://www.apache.org/licenses/LICENSE-2.0
//
//  Unless required by applicable law or agreed to in writing, software
//  distributed under the License is distributed on an "AS IS" BASIS,
//  WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
//  See the License for the specific language governing permissions and
//  limitations under the License.
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.dispatchLogEvent = void 0;
const dispatchLogEvent = function (action, param) {
    const LOG = true; // toggle log on/off 
    if (LOG) {
        var event = new CustomEvent("LOG", { "detail": { "action": action, "param": param } });
        document.dispatchEvent(event);
    }
};
exports.dispatchLogEvent = dispatchLogEvent;
//# sourceMappingURL=utils.js.map

/***/ }),

/***/ "./lib/version.js":
/*!************************!*\
  !*** ./lib/version.js ***!
  \************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

//  Copyright 2019-2020 The Lux Authors.
// 
//  Licensed under the Apache License, Version 2.0 (the "License");
//  you may not use this file except in compliance with the License.
//  You may obtain a copy of the License at
//
//      http://www.apache.org/licenses/LICENSE-2.0
//
//  Unless required by applicable law or agreed to in writing, software
//  distributed under the License is distributed on an "AS IS" BASIS,
//  WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
//  See the License for the specific language governing permissions and
//  limitations under the License.
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.MODULE_NAME = exports.MODULE_VERSION = void 0;
const data = __webpack_require__(/*! ../package.json */ "./package.json");
/**
 * The _model_module_version/_view_module_version this package implements.
 *
 * The html widget manager assumes that this is the same as the npm package
 * version number.
 */
exports.MODULE_VERSION = data.version;
/*
 * The current package name.
 */
exports.MODULE_NAME = data.name;
//# sourceMappingURL=version.js.map

/***/ }),

/***/ "./lib/warningBtn.js":
/*!***************************!*\
  !*** ./lib/warningBtn.js ***!
  \***************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
const react_1 = __importStar(__webpack_require__(/*! react */ "webpack/sharing/consume/default/react"));
class WarningBtn extends react_1.Component {
    constructor(props) {
        super(props);
    }
    render() {
        const { message, toggleWarningPanel, openWarning } = this.props;
        let warnBtn;
        let warnMsg;
        if (message != "") {
            warnBtn = react_1.default.createElement("i", { id: "warnBtn", className: 'fa fa-exclamation-triangle', onClick: (e) => toggleWarningPanel(e) });
            warnMsg = react_1.default.createElement("div", { className: "warning-footer", style: { display: (openWarning) ? 'flex' : 'none' } },
                react_1.default.createElement("p", { className: "warnMsgText", dangerouslySetInnerHTML: { __html: message } }));
        }
        return (react_1.default.createElement("div", null,
            warnBtn,
            warnMsg));
    }
}
exports.default = WarningBtn;
//# sourceMappingURL=warningBtn.js.map

/***/ }),

/***/ "./lib/widget.js":
/*!***********************!*\
  !*** ./lib/widget.js ***!
  \***********************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

//  Copyright 2019-2020 The Lux Authors.
// 
//  Licensed under the Apache License, Version 2.0 (the "License");
//  you may not use this file except in compliance with the License.
//  You may obtain a copy of the License at
//
//      http://www.apache.org/licenses/LICENSE-2.0
//
//  Unless required by applicable law or agreed to in writing, software
//  distributed under the License is distributed on an "AS IS" BASIS,
//  WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
//  See the License for the specific language governing permissions and
//  limitations under the License.
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.LuxWidgetView = exports.LuxModel = void 0;
const base_1 = __webpack_require__(/*! @jupyter-widgets/base */ "webpack/sharing/consume/default/@jupyter-widgets/base/@jupyter-widgets/base");
const version_1 = __webpack_require__(/*! ./version */ "./lib/version.js");
__webpack_require__(/*! ../style/base.css */ "./style/base.css");
const React = __importStar(__webpack_require__(/*! react */ "webpack/sharing/consume/default/react"));
const ReactDOM = __importStar(__webpack_require__(/*! react-dom */ "webpack/sharing/consume/default/react-dom"));
const lodash_1 = __importDefault(__webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js"));
const react_bootstrap_1 = __webpack_require__(/*! react-bootstrap */ "webpack/sharing/consume/default/react-bootstrap/react-bootstrap");
const chartGallery_1 = __importDefault(__webpack_require__(/*! ./chartGallery */ "./lib/chartGallery.js"));
const currentVis_1 = __importDefault(__webpack_require__(/*! ./currentVis */ "./lib/currentVis.js"));
const utils_1 = __webpack_require__(/*! ./utils */ "./lib/utils.js");
const buttonsBroker_1 = __importDefault(__webpack_require__(/*! ./buttonsBroker */ "./lib/buttonsBroker.js"));
const warningBtn_1 = __importDefault(__webpack_require__(/*! ./warningBtn */ "./lib/warningBtn.js"));
const infoBtn_1 = __importDefault(__webpack_require__(/*! ./infoBtn */ "./lib/infoBtn.js"));
class LuxModel extends base_1.DOMWidgetModel {
    defaults() {
        return Object.assign(Object.assign({}, super.defaults()), { _model_name: LuxModel.model_name, _model_module: LuxModel.model_module, _model_module_version: LuxModel.model_module_version, _view_name: LuxModel.view_name, _view_module: LuxModel.view_module, _view_module_version: LuxModel.model_module_version });
    }
}
exports.LuxModel = LuxModel;
LuxModel.serializers = Object.assign({}, base_1.DOMWidgetModel.serializers);
LuxModel.model_name = 'LuxModel';
LuxModel.model_module = version_1.MODULE_NAME;
LuxModel.model_module_version = version_1.MODULE_VERSION;
LuxModel.view_name = 'LuxWidgetView'; // Set to null if no view
LuxModel.view_module = version_1.MODULE_NAME; // Set to null if no view
LuxModel.view_module_version = version_1.MODULE_VERSION;
class LuxWidgetView extends base_1.DOMWidgetView {
    initialize() {
        let view = this;
        class ReactWidget extends React.Component {
            constructor(props) {
                super(props);
                this.chartComponents = Array();
                this.handleCurrentVisSelect = (selectedValue) => {
                    this.setState({ currentVisSelected: selectedValue }, () => {
                        if (selectedValue == -1) {
                            this.onListChanged(-1, null);
                        }
                        else {
                            this.onListChanged(-2, null);
                        }
                    });
                };
                for (var i = 0; i < this.props.model.get("recommendations").length; i++) {
                    this.chartComponents.push(React.createRef());
                }
                this.state = {
                    currentVis: props.model.get("current_vis"),
                    recommendations: props.model.get("recommendations"),
                    intent: props.model.get("intent"),
                    selectedIntentIndex: {},
                    message: props.model.get("message"),
                    longDescription: this.generateDescription(null),
                    tabItems: this.generateTabItems(),
                    activeTab: props.activeTab,
                    showAlert: false,
                    selectedRec: {},
                    _selectedVisIdxs: {},
                    deletedIndices: {},
                    currentVisSelected: -2,
                    openWarning: false,
                    openInfo: false,
                    plottingScale: props.model.get("plotting_scale")
                };
                // This binding is necessary to make `this` work in the callback
                this.handleCurrentVisSelect = this.handleCurrentVisSelect.bind(this);
                this.handleSelect = this.handleSelect.bind(this);
                this.exportSelection = this.exportSelection.bind(this);
                this.toggleWarningPanel = this.toggleWarningPanel.bind(this);
                this.deleteSelection = this.deleteSelection.bind(this);
                this.setIntent = this.setIntent.bind(this);
                this.closeExportInfo = this.closeExportInfo.bind(this);
                this.toggleInfoPanel = this.toggleInfoPanel.bind(this);
            }
            toggleWarningPanel(e) {
                if (this.state.openWarning) {
                    utils_1.dispatchLogEvent("closeWarning", this.state.message);
                    this.setState({ openWarning: false });
                }
                else {
                    utils_1.dispatchLogEvent("openWarning", this.state.message);
                    this.setState({ openWarning: true });
                }
            }
            // called to toggle the long description panel
            toggleInfoPanel(e) {
                if (this.state.openInfo) {
                    utils_1.dispatchLogEvent("closeInfo", this.state.longDescription);
                    this.setState({ openInfo: false });
                }
                else {
                    utils_1.dispatchLogEvent("openInfo", this.state.longDescription);
                    this.setState({ openInfo: true });
                }
            }
            // called to close alert pop up upon export button hit by user
            closeExportInfo() {
                utils_1.dispatchLogEvent("closeExportInfo", null);
                this.setState({
                    showAlert: false
                });
            }
            // called when the variable is changed in the view.model
            onChange(model) {
                this.setState(model.changed);
            }
            // triggered when component is mounted (i.e., when widget first rendered)
            componentDidMount() {
                view.listenTo(view.model, "change", this.onChange.bind(this));
            }
            // triggered after component is updated
            // instead of touch (which leads to callback issues), we have to use save_changes
            componentDidUpdate() {
                view.model.save_changes();
            }
            // populates the long description
            generateDescription(selectedTab) {
                // selectedTab starts out as null and is populated on switches of tabs
                if (!selectedTab) {
                    // takes care of init, sets to first longDescription in recommendations list
                    if (this.props.model.get("recommendations").length > 0) {
                        selectedTab = this.props.model.get("recommendations")[0].action;
                    }
                    else {
                        return "";
                    }
                }
                var description = "";
                for (var recommendation of this.props.model.get("recommendations")) {
                    if (recommendation.action === selectedTab) {
                        description = recommendation.long_description;
                    }
                }
                return description;
            }
            handleSelect(selectedTab) {
                // The active tab must be set into the state so that
                // the Tabs component knows about the change and re-renders.
                if (selectedTab) {
                    utils_1.dispatchLogEvent("switchTab", selectedTab);
                }
                var description = this.generateDescription(selectedTab);
                this.setState({
                    activeTab: selectedTab,
                    longDescription: description
                });
            }
            onListChanged(tabIdx, selectedLst) {
                // Example _selectedVisIdxs : {'Correlation': [0, 2], 'Occurrence': [1]}
                var _selectedVisIdxs = {};
                this.state.selectedRec[tabIdx] = selectedLst; // set selected elements as th selectedRec of this tab
                for (var tabID of Object.keys(this.state.selectedRec)) {
                    if (tabID in this.state.recommendations) {
                        var actionName = this.state.recommendations[tabID]["action"];
                        if (this.state.selectedRec[tabID].length > 0) {
                            _selectedVisIdxs[actionName] = this.state.selectedRec[tabID];
                        }
                    }
                    else if (this.state.currentVisSelected == -1) {
                        _selectedVisIdxs["currentVis"] = this.state.currentVis;
                    }
                }
                this.setState({
                    _selectedVisIdxs: _selectedVisIdxs
                });
            }
            exportSelection() {
                utils_1.dispatchLogEvent("exportBtnClick", this.state._selectedVisIdxs);
                this.setState(state => ({
                    showAlert: true
                }));
                // Expire alert box in 1 minute
                setTimeout(() => {
                    this.setState(state => ({
                        showAlert: false
                    }));
                }, 60000);
                view.model.set('_selectedVisIdxs', this.state._selectedVisIdxs);
                view.model.save();
            }
            /*
             * Goes through all selections and removes and clears any selections across recommendation tabs.
             * Changing deletedIndices triggers an observer in the backend to update backend data structure.
             * Re-renders each tab's chart component, with the updated recommendations.
             */
            deleteSelection() {
                utils_1.dispatchLogEvent("deleteBtnClick", this.state._selectedVisIdxs);
                var currDeletions = this.state._selectedVisIdxs;
                // Deleting from the frontend's visualization data structure
                for (var recommendation of this.state.recommendations) {
                    if (this.state._selectedVisIdxs[recommendation.action]) {
                        let delCount = 0;
                        for (var index of this.state._selectedVisIdxs[recommendation.action]) {
                            recommendation.vspec.splice(index - delCount, 1);
                            delCount++;
                        }
                    }
                }
                this.setState({
                    selectedRec: {},
                    _selectedVisIdxs: {},
                    deletedIndices: currDeletions
                });
                // Re-render each tab's components to update deletions on front end
                for (var i = 0; i < this.props.model.get("recommendations").length; i++) {
                    this.chartComponents[i].current.removeDeletedCharts();
                }
                view.model.set('deletedIndices', currDeletions);
                view.model.set('_selectedVisIdxs', {});
                view.model.save();
            }
            /*
             * Set selected Vis as intent and re-renders widget to update to new view.
             * Shows warning if user tries to select more than one Vis card.
             */
            setIntent() {
                utils_1.dispatchLogEvent("intentBtnClick", this.state._selectedVisIdxs);
                if (Object.keys(this.state._selectedVisIdxs).length == 1) {
                    var action = Object.keys(this.state._selectedVisIdxs)[0];
                    if (this.state._selectedVisIdxs[action].length == 1) {
                        view.model.set('selectedIntentIndex', this.state._selectedVisIdxs);
                        view.model.save();
                        return;
                    }
                }
            }
            generateTabItems() {
                return (this.props.model.get("recommendations").map((actionResult, tabIdx) => React.createElement(react_bootstrap_1.Tab, { eventKey: actionResult.action, title: actionResult.action },
                    React.createElement(chartGallery_1.default
                    // this exists to prevent chart gallery from refreshing while changing tabs
                    // This is an anti-pattern for React, but is necessary here because our chartgallery is very expensive to initialize
                    , { 
                        // this exists to prevent chart gallery from refreshing while changing tabs
                        // This is an anti-pattern for React, but is necessary here because our chartgallery is very expensive to initialize
                        key: 'no refresh', ref: this.chartComponents[tabIdx], title: actionResult.action, description: actionResult.description, multiple: true, maxSelectable: 10, onChange: this.onListChanged.bind(this, tabIdx), graphSpec: actionResult.vspec, currentVisShow: !lodash_1.default.isEmpty(this.props.model.get("current_vis")), plottingScale: this.props.model.get("plotting_scale") }))));
            }
            generateNoRecsWarning() {
                if (this.state.message != "") {
                    return React.createElement("div", { id: "no-recs-footer", style: { display: "flex" } },
                        React.createElement("div", { id: "no-recs", className: "fa fa-exclamation-triangle" }),
                        React.createElement("div", null,
                            React.createElement("p", { className: "warnMsgText", dangerouslySetInnerHTML: { __html: this.state.message.replace(/<[^>]+>/g, '') } })));
                }
            }
            render() {
                var buttonsEnabled = Object.keys(this.state._selectedVisIdxs).length > 0;
                var intentEnabled = Object.keys(this.state._selectedVisIdxs).length == 1 && Object.values(this.state._selectedVisIdxs)[0].length == 1;
                const height = (350 + 160 * (this.state.plottingScale - 1)).toString() + "px";
                if (this.state.recommendations.length == 0) {
                    return (React.createElement("div", { id: "oneViewWidgetContainer", style: { flexDirection: 'column' } },
                        React.createElement("div", { style: { display: 'flex', flexDirection: 'row', height: height } },
                            React.createElement(currentVis_1.default, { intent: this.state.intent, currentVisSpec: this.state.currentVis, numRecommendations: this.state.recommendations.length, onChange: this.handleCurrentVisSelect, plottingScale: this.state.plottingScale })),
                        React.createElement(buttonsBroker_1.default, { buttonsEnabled: buttonsEnabled, deleteSelection: this.deleteSelection, exportSelection: this.exportSelection, setIntent: this.setIntent, closeExportInfo: this.closeExportInfo, tabItems: this.state.tabItems, showAlert: this.state.showAlert, intentEnabled: intentEnabled }),
                        this.generateNoRecsWarning()));
                }
                else if (this.state.recommendations.length > 0) {
                    return (React.createElement("div", { id: "widgetContainer", style: { flexDirection: 'column' } },
                        React.createElement("div", { style: { display: 'flex', flexDirection: 'row', height: height } },
                            React.createElement(currentVis_1.default, { intent: this.state.intent, currentVisSpec: this.state.currentVis, numRecommendations: this.state.recommendations.length, onChange: this.handleCurrentVisSelect, plottingScale: this.state.plottingScale }),
                            React.createElement("div", { id: "tabBanner" },
                                React.createElement("p", { className: "title-description", style: { visibility: !lodash_1.default.isEmpty(this.state.currentVis) ? 'visible' : 'hidden' } }, "You might be interested in..."),
                                React.createElement(react_bootstrap_1.Tabs, { activeKey: this.state.activeTab, id: "tabBannerList", onSelect: this.handleSelect, className: !lodash_1.default.isEmpty(this.state.currentVis) ? "tabBannerPadding" : "" }, this.state.tabItems))),
                        React.createElement(buttonsBroker_1.default, { buttonsEnabled: buttonsEnabled, deleteSelection: this.deleteSelection, exportSelection: this.exportSelection, setIntent: this.setIntent, closeExportInfo: this.closeExportInfo, tabItems: this.state.tabItems, showAlert: this.state.showAlert, intentEnabled: intentEnabled }),
                        React.createElement(infoBtn_1.default, { message: this.state.longDescription, toggleInfoPanel: this.toggleInfoPanel, openInfo: this.state.openInfo }),
                        React.createElement(warningBtn_1.default, { message: this.state.message, toggleWarningPanel: this.toggleWarningPanel, openWarning: this.state.openWarning })));
                }
            }
        }
        const $app = document.createElement("div");
        const App = React.createElement(ReactWidget, view);
        ReactDOM.render(App, $app); // Renders the app
        view.el.append($app); //attaches the rendered app to the DOM (both are required for the widget to show)
        utils_1.dispatchLogEvent("initWidget", "");
    }
}
exports.LuxWidgetView = LuxWidgetView;
//# sourceMappingURL=widget.js.map

/***/ }),

/***/ "./package.json":
/*!**********************!*\
  !*** ./package.json ***!
  \**********************/
/***/ ((module) => {

"use strict";
module.exports = JSON.parse('{"name":"luxwidget","version":"0.1.5","description":"A Custom Jupyter Widget Library","keywords":["jupyter","jupyterlab","jupyterlab-extension","widgets"],"files":["webpack.config.js","tsconfig.json","luxwidget/*.py","luxwidget/nbextension/static/*","luxwidget/labextension/static/*","luxwidget/labextension/package.json","*.py","src/*.tsx","src/*.ts","lib/**/*.js","lib/**/*.ts","dist/*.js","style/index.js","style/*.css"],"homepage":"https://github.com/lux-org/lux-widget","bugs":{"url":"https://github.com/lux-org/lux-widget/issues"},"license":"Apache-2.0","author":{"name":"Doris Jung-Lin Lee","email":"dorisjunglinlee@gmail.com"},"main":"lib/index.js","types":"./lib/index.d.ts","repository":{"type":"git","url":"https://github.com/lux-org/lux-widget"},"scripts":{"build":"jlpm run build:lib && jlpm run build:labextension:dev","build:prod":"jlpm run build:lib && jlpm run build:labextension","build:labextension":"jupyter labextension build .","build:labextension:dev":"jupyter labextension build --development True .","build:lib":"tsc","clean":"jlpm run clean:lib","clean:lib":"rimraf lib tsconfig.tsbuildinfo","clean:labextension":"rimraf {{ cookiecutter.python_name }}/labextension","clean:all":"jlpm run clean:lib && jlpm run clean:labextension","eslint":"eslint . --ext .ts,.tsx --fix","eslint:check":"eslint . --ext .ts,.tsx","install:extension":"jupyter labextension develop --overwrite .","prepare":"jlpm run clean && jlpm run build:prod","watch":"run-p watch:src watch:labextension","watch:src":"tsc -w","watch:labextension":"jupyter labextension watch ."},"dependencies":{"@jupyter-widgets/base":"^3 || ^4.0.0","@material-ui/core":"^4.11.0","bootstrap":"^4.4.1","detect-libc":"^1.0.3","jquery":"^3.4.1","needle":"^2.4.0","nopt":"^4.0.1","rc":"^1.2.8","react":"^17.0.1","react-bootstrap":"^1.0.0-beta.16","react-dom":"^17.0.1","react-vega":"7.1.1","vega":"^5.9.0","vega-embed":"^6.2.1","vega-lite":"^4.0.2"},"devDependencies":{"@babel/preset-react":"^7.7.4","@jupyterlab/builder":"^3.0.0","@lumino/application":"^1.13.1","@lumino/widgets":"^1.16.1","@types/expect.js":"^0.3.29","@types/jquery":"^3.5.4","@types/mocha":"^5.2.5","@types/node":"^10.11.6","@types/react":"^16.9.16","@types/react-dom":"^16.9.4","@types/webpack-env":"^1.13.6","@typescript-eslint/eslint-plugin":"^4.8.1","@typescript-eslint/parser":"^4.8.1","css-loader":"^3.2.0","eslint":"^7.14.0","eslint-config-prettier":"^6.15.0","eslint-plugin-prettier":"^3.1.4","expect.js":"^0.3.1","fs-extra":"^7.0.0","mkdirp":"^0.5.1","mocha":"^5.2.0","npm-run-all":"^4.1.5","prettier":"^2.1.1","rimraf":"^3.0.2","source-map-loader":"^0.2.4","style-loader":"^1.0.0","ts-loader":"^6.2.1","typescript":"~4.1.3","webpack":"^4.46.0","webpack-cli":"^3.3.12"},"jupyterlab":{"extension":"lib/plugin","outputDir":"luxwidget/labextension"},"presets":["@babel/preset-env","@babel/preset-react"],"styleModule":"style/index.js"}');

/***/ })

}]);
//# sourceMappingURL=lib_widget_js.1d11dc13862e3fe4539e.js.map