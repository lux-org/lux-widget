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
import SelectableCard from './selectableCard';
import { VegaLite } from 'react-vega';
import ScrollableContent from './scrollableContent'
import {dispatchLogEvent} from './utils';
interface chartGalleryProps{
    title:string,
    multiple: boolean,
    maxSelectable: number,
    onChange: Function,
    graphSpec: object[],
    description: string,
    currentVisShow: boolean,
}

class ChartGalleryComponent extends Component<chartGalleryProps,any> {
    constructor(props:any) {
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
              dispatchLogEvent("unclickVis",{"tabTitle":this.props.title,"index":index,
                                              "title":this.props.graphSpec[index]['title'],
                                              "mark":this.props.graphSpec[index]['mark'],
                                              "encoding":this.props.graphSpec[index]['encoding']})
              selectedIndexes = selectedIndexes.filter(item => item != index);
              props.onChange(selectedIndexes);
            } else {
              // dispatchLogEvent("clickVis",{"tabTitle":this.props.title,"index":index,"vis":this.props.graphSpec[index]});
              dispatchLogEvent("clickVis",{"tabTitle":this.props.title,"index":index,
                                            "title":this.props.graphSpec[index]['title'],
                                            "mark":this.props.graphSpec[index]['mark'],
                                            "encoding":this.props.graphSpec[index]['encoding']})
              if (!(selectedIndexes.length >= props.maxSelectable)) {
                selectedIndexes.push(index);
                props.onChange(selectedIndexes);
              }
            }
            return {
              selected: selectedIndexes
            };
          } else {
            dispatchLogEvent("clickVis",index)
            props.onChange(index);
            return {
              selected: index
            }
          }
        });
      }

    removeDeletedCharts() {
      this.setState({selected:[]});
    }
    
    render() {
        return (
          <div className="chartGalleryTabContent">
            <p className="text-description" dangerouslySetInnerHTML={{__html: this.props.description}}/>
            <ScrollableContent galleryItems={this.props.graphSpec.map((item,idx) =>
              <div key={idx.toString()} 
                  className="graph-container"
                  id={"graph-container-".concat(idx.toString())}>
                  {this.state.selected.indexOf(idx) > -1 ? 
                    <SelectableCard 
                      key={idx} 
                      selected={true} 
                      onClick={(e) => {this.onItemSelected(idx);}}>
                      <VegaLite
                        spec={item}  
                        padding={{left: 10, top: 5, right: 5, bottom: 5}}
                        actions={false}/>
                    </SelectableCard>
                  :
                    <SelectableCard 
                        key={idx} 
                        selected={false} 
                        onClick={(e) => {this.onItemSelected(idx);}}>
                        <VegaLite
                          spec={item}  
                          padding={{left: 10, top: 5, right: 5, bottom: 5}}
                          actions={false}/>
                    </SelectableCard>
                  }
              </div>  
            )} title={this.props.title} currentVisShow={this.props.currentVisShow}></ScrollableContent>
          </div>
        );
    }
}
export default ChartGalleryComponent;
