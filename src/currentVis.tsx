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

import React, { Component } from 'react';
import { VegaLite } from 'react-vega';
import SelectableCard from './selectableCard';
import _ from 'lodash';
import { withStyles } from "@material-ui/core/styles";
import Button from '@material-ui/core/Button';
import Tooltip from '@material-ui/core/Tooltip';
interface currentVisProps{
    intent:string,
    currentVisSpec: object,
    numRecommendations: number,
    onChange: Function,
    plottingScale: number
}

class CurrentVisComponent extends Component<currentVisProps,any> {
    constructor(props:any) {
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
        } else {
            this.setState({
                selected: 0
            });
            this.props.onChange(-1);
        }
    }
    render() {
        if (!_.isEmpty(this.props.currentVisSpec)){
            var vislib = "vegalite";
            var img_str = "";
            if ('vislib' in this.props.currentVisSpec && 'config' in this.props.currentVisSpec) {
                vislib = JSON.stringify(this.props.currentVisSpec['vislib']);
                vislib = vislib.substring(1, vislib.length - 1);
                const png_string = JSON.stringify(this.props.currentVisSpec['config']);
                img_str = "data:image/png;base64," + png_string.substring(1, png_string.length - 1) + "\ ";
            }
            if (this.props.numRecommendations == 0) {
                return (
                    <div className="vizContainer" style={{ display: 'flex', justifyContent: 'center', width:'320px' }}>
                        {vislib === 'matplotlib' ?                     
                        <img id="cur-img" src={img_str} style={{ height: `${50 + 160 * this.props.plottingScale}px`, width: `${50 + 185 * this.props.plottingScale}px`}}></img> :
                        <VegaLite spec={this.props.currentVisSpec}
                            padding={{left: 0, top: 5, right: 5, bottom: 5}} 
                            actions={false}/>
                        }
                    </div>
                );
            } else {
                const styles = {
                  tooltip: {
                    width: "100px",
                    fontSize: "13px",
                    marginTop: "10px",
                    textAlign: 'center' as const
                  }
                };
                const CustomTooltip = withStyles(styles)(Tooltip);
                const hasCurrentVis = "vislib" in this.props.currentVisSpec
                const width: string = (300 + (this.props.plottingScale - 1) * 185).toString() + "px";
                
                return hasCurrentVis ? (
                    <div id="mainVizContainer" style={{ width: width }}>
                            <div>
                                {this.props.currentVisSpec["allcols"] ?
                                    <div className="text-container-style">
                                        <p className="title-description" style={{ fontSize: '20px', height:'15px', display:'inline',top:'10px',left: '20px' }}>Dataframe Visualization</p>
                                        <p className="text-description" style={{top: '40px',left: '10px', marginTop: '40px'}}>based on all columns in the dataframe</p>
                                    </div> :
                                    <div className="text-container-style">
                                        <p className="title-description" style={{ fontSize: '20px', height:'15px', display:'inline',top:'10px',left: '40px' }}>Current Visualization</p>   
                                        <p className="text-description" style={{top: '40px',left: '40px', marginTop: '40px' }}>based on user specified&nbsp;
                                        <CustomTooltip title={this.props.intent} arrow>
                                            <Button style={{ fontSize: "13px", minWidth: "0px", padding: "0px", background: "aliceblue", textTransform: "none", borderBottom: "1px dotted #505050"  }}>intent</Button>
                                        </CustomTooltip>
                                        </p>
                                    </div>
                                }
                            </div>
                            <div id="mainVizInnerContainer">
                                <div className="vizContainer" style={{ display: 'flex', justifyContent: 'center' }}>
                                    <SelectableCard key={0}
                                    selected={this.state.selected > -1}
                                    onClick={(e) => this.onItemSelected()}>
                                        {vislib === 'matplotlib' ?                     
                                        <img id="cur-img" src={img_str} style={{ height: `${50 + 160 * this.props.plottingScale}px`, width: `${50 + 185 * this.props.plottingScale}px`}}></img> :
                                        <VegaLite spec={this.props.currentVisSpec}
                                                padding={{left: 10, top: 5, right: 5, bottom: 5}}
                                                width={185 * this.props.plottingScale} height={160 * this.props.plottingScale} 
                                                actions={false}/>
                                        }
                                    </SelectableCard>
                                </div>
                            </div>
                        </div>
                    ) : null;
            }
        } else {
            return (
                <div className="placeHolderVizContainer">
                </div>
            )
        }
        
    }
}
export default CurrentVisComponent;