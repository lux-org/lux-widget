import React, { Component } from 'react';
import { VegaLite } from 'react-vega';
import SelectableCard from './selectableCard';
import _ from 'lodash';
interface currentVisProps{
    currentVisSpec: object,
    numRecommendations: number,
    onChange: Function,
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
        // console.log("this.props.currentVisSpec:",this.props.currentVisSpec)
        let selectedVis = function (vizLabel:string){
            // console.log("selectedVis event:",event)
            console.log(vizLabel)
        }
        if (!_.isEmpty(this.props.currentVisSpec)){
            if (this.props.numRecommendations == 0) {
                return (
                    <div className="vizContainer" onClick={()=>selectedVis("main")}>
                        <VegaLite spec={this.props.currentVisSpec}
                            padding={{left: 0, top: 5, right: 5, bottom: 5}} 
                                actions={false}/>
                    </div>
                );
            } else {
                return (
                    <div id="mainVizContainer">
                        <div style={{ display: 'flex', flexDirection: 'column'}}>
                            <p className="title-description" style={{ position: 'relative', fontSize: '18px', marginTop: '10px', marginLeft:'0px',height: '27px', textAlign: 'center' }}>Current Vis</p>
                            <p className="text-description" style={{ textAlign: 'center', marginBottom: '0px', marginLeft:'0px', marginTop:'23px',height:'20px'  }}>based on user specified intent</p>
                            <div id="mainVizInnerContainer" style={{ position: 'relative', top: '0px', left: '0px' }}>
                                <div className="vizContainer" onClick={()=>selectedVis("main")}
                                style={{ width: '280px' }}>
                                    <SelectableCard key={0}
                                    selected={this.state.selected > -1}
                                    onClick={(e) => this.onItemSelected()}>
                                        <VegaLite spec={this.props.currentVisSpec}
                                                padding={{left: 10, top: 5, right: 5, bottom: 5}}
                                                width={185} height={160} 
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
export default CurrentVisComponent;