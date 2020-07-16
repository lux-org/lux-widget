import React, { Component } from 'react';
import { VegaLite } from 'react-vega';
import SelectableCard from './selectableCard';
import _ from 'lodash';
interface currentViewProps{
    currentViewSpec: object,
    numRecommendations: number,
    onChange: Function,
}
class CurrentViewComponent extends Component<currentViewProps,any> {
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
        console.log("this.props.currentViewSpec:",this.props.currentViewSpec)
        let selectedVis = function (vizLabel:string){
            // console.log("selectedVis event:",event)
            console.log(vizLabel)
        }
        if (!_.isEmpty(this.props.currentViewSpec)){
            if (this.props.numRecommendations == 0) {
                return (
                    <div className="vizContainer" onClick={()=>selectedVis("main")}>
                        <VegaLite spec={this.props.currentViewSpec}
                            padding={{left: 0, top: 5, right: 5, bottom: 5}} 
                                actions={false}/>
                    </div>
                );
            } else {
                return (
                    <div id="mainVizContainer">
                        <div style={{ display: 'flex', flexDirection: 'column'}}>
                            <h2 id="mainVizTitle" style={{ position: 'relative', top: '0px', left: '0px', width: '245px', textAlign: 'center' }}>Current View</h2>
                            <div id="mainVizInnerContainer" style={{ position: 'relative', top: '0px', left: '0px' }}>
                                <div className="vizContainer" onClick={()=>selectedVis("main")}>
                                    <SelectableCard key={0} 
                                    selected={this.state.selected > -1}
                                    onClick={(e) => this.onItemSelected()}>
                                        <VegaLite spec={this.props.currentViewSpec}
                                                padding={{left: 10, top: 5, right: 5, bottom: 5}}
                                                width={200} height={175} 
                                                actions={false}/>
                                    </SelectableCard>
                                </div>
                            </div>
                        </div>
                    </div>
                );
            }
        }else{
            return (
                <div className="placeHolderVizContainer">
                </div>
            )
        }
        
    }
}
export default CurrentViewComponent;