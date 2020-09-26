import React, { Component } from 'react';
// import ReactDOM from 'react-dom';
// import ToolComponent from './tool';
import SelectableCard from './selectableCard';
import { VegaLite } from 'react-vega';
// import { VisualizationSpec } from 'vega-embed';
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
              dispatchLogEvent("unclickVis",{"tabTitle":this.props.title,"index":index,"vis":this.props.graphSpec[index]})
              selectedIndexes = selectedIndexes.filter(item => item != index);
              props.onChange(selectedIndexes);
            } else {
              dispatchLogEvent("clickVis",{"tabTitle":this.props.title,"index":index,"vis":this.props.graphSpec[index]})
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
      //this.props.onChange(this.state.selected);
    }
    
    render() {
        console.log('chart render');
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
                      onClick={(e) => {this.onItemSelected(idx); console.log(this.state)}}>
                      <VegaLite
                        spec={item}  
                        padding={{left: 10, top: 5, right: 5, bottom: 5}}
                        actions={false}/>
                    </SelectableCard>
                  :
                    <SelectableCard 
                        key={idx} 
                        selected={false} 
                        onClick={(e) => {this.onItemSelected(idx); console.log(this.state)}}>
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
