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
        // console.log("intent:",this.props.intent)
        // var intentStr1 = this.props.intent["filters"]
        // var intentStr2 =this.props.intent["attributes"]
        // var intentStr = intentStr1.concat(intentStr2).join(", ")
        // console.log("intentStr:",intentStr)
        // // console.log("this.props.currentVisSpec:",this.props.currentVisSpec)
        let selectedVis = function (vizLabel:string){
            // console.log("selectedVis event:",event)
            console.log(vizLabel)
        }
        if (!_.isEmpty(this.props.currentVisSpec)){
            if (this.props.numRecommendations == 0) {
                return (
                    <div className="vizContainer" style={{width:'320px'}} onClick={()=>selectedVis("main")}>
                        <VegaLite spec={this.props.currentVisSpec}
                            padding={{left: 0, top: 5, right: 5, bottom: 5}} 
                                actions={false}/>
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

                return (
                    <div id="mainVizContainer">
                            <p className="title-description" style={{ position: 'absolute', fontSize: '20px', height:'25px', display:'inline',top:'10px',left: '40px' }}>Current Visualization</p>   
                            <p className="text-description" style={{top: '40px',left: '40px',position:'absolute'}}>based on user specified&nbsp;
                            <CustomTooltip title={this.props.intent} arrow>
                                <Button style={{ fontSize: "13px", minWidth: "0px", padding: "0px", background: "aliceblue", textTransform: "none", borderBottom: "1px dotted #505050"  }}>intent</Button>
                            </CustomTooltip>
                            </p>
                            <div id="mainVizInnerContainer">

                            {/* Code for caption under Current Vis */}
                            {/* <p className="title-description" style={{ position: 'absolute', fontSize: '20px', height:'25px', display:'inline',top:'0px',left: '70px' }}>Current Vis</p>   
                            <p className="text-description" style={{top: '30px', marginLeft: '10px',position:'absolute'}}>Based on:</p>
                            <p className="highlight-intent" style={{left:'77px',position:'absolute',color:'#505050',width:'200px',top:'42px',fontSize: '13px'}}>{this.props.intent}</p>    
                            <div id="mainVizInnerContainer" style={{ position: 'absolute', top: '65px', left: '0px' }}> */}
                            {/* Code for Left align for Current Vis based on:, right align for vertical intent block  */}
                            {/* <p className="title-description" style={{ position: 'absolute', fontSize: '20px', height:'25px', display:'inline',top:'15px' }}>Current Vis</p>
                            <p className="text-description" style={{top: '40px', position:'absolute'}}>based on intent:</p>
                            <p className="highlight-intent" style={{left:'135px',position:'absolute',color:'#505050',width:'145px'}}>{this.props.intent}</p>
                            <div id="mainVizInnerContainer" style={{ position: 'absolute', top: '65px', left: '0px' }}> */}
                                <div className="vizContainer" onClick={()=>selectedVis("main")}>
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