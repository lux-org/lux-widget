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
import {dispatchLogEvent} from './utils';
class ScrollableContent extends Component<{galleryItems: JSX.Element[] ,title:string, currentVisShow: boolean, plottingScale: number },any>  {
  constructor(props:any){
    super(props)
    this.state = {
        isScrolling:false,
        firstScroll:true,
        scrollIndicator: true,
    }
    this.handleScroll = this.handleScroll.bind(this)    
    this.scrollStartStopListener = this.scrollStartStopListener.bind(this)    
  }
  handleScroll(event) {
    this.setState({
      scrollIndicator:false,
    });    
    var component = this;
    this.scrollStartStopListener(function(){
        dispatchLogEvent("stopScroll",component.props.title)
        component.setState({
            firstScroll:true,
        })
      })
  }

  scrollStartStopListener(callback:CallableFunction) { 
	if (!callback || typeof callback !== 'function') return;
    if (this.state.firstScroll){
        dispatchLogEvent("startScroll",this.props.title)
        this.setState({
            firstScroll:false,
        })
    }
    
    window.clearTimeout(this.state.isScrolling); // Clear our timeout throughout the scroll

    // Set timeout to run after scrolling ends --> after timeout, set `isScrolling` 
    this.setState({
        isScrolling:setTimeout(function() {
            callback();
        }, 60)
    })

};
  render(){
    let shouldShowScrollIndicator = false;
    let numMoreCharts = this.props.galleryItems.length ;
    if (this.props.currentVisShow && this.props.galleryItems.length > 2) {
      shouldShowScrollIndicator = true;
      numMoreCharts -= 2;
    } else if (!this.props.currentVisShow && this.props.galleryItems.length > 3) {
      shouldShowScrollIndicator = true;
      numMoreCharts -= 3;
    }
    var scrollDescription:string;
    if(numMoreCharts==1){
      scrollDescription= "Scroll for "+numMoreCharts+" more chart"
    }else{
      scrollDescription= "Scroll for "+numMoreCharts+" more charts"
    }
    // const height: string = (120 + (this.props.plottingScale * 160)).toString() + "px"; 
    return (<div id="staticOuterDiv" className="recommendationStaticContentOuter" onScroll={this.handleScroll}>
        <div id="mult-graph-container" className= "recommendationContentInner">
            {this.props.galleryItems}
        </div>
        <div id="scroll-indicator-background" style={{visibility: this.state.scrollIndicator && shouldShowScrollIndicator ? 'visible' : 'hidden' }}>
          <p id="scroll-indicator" style={{visibility: this.state.scrollIndicator && shouldShowScrollIndicator ? 'visible' : 'hidden' }}>{scrollDescription}<i id='first-arrow' className='fa fa-chevron-right'></i><i id='second-arrow' className='fa fa-chevron-right'></i> </p>
          {/* onClick={(event)=>$('#staticOuterDiv').scrollLeft(500)} */}
        </div>
    </div>)
  }
}
export default ScrollableContent;