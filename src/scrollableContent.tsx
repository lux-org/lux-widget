import React, { Component } from 'react';
import {dispatchLogEvent} from './utils';
class ScrollableContent extends Component<{galleryItems: JSX.Element[],title:string, currentViewShow: boolean},any>  {
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
    if (this.props.currentViewShow && this.props.galleryItems.length > 2) {
      shouldShowScrollIndicator = true;
      numMoreCharts -= 2;
    } else if (!this.props.currentViewShow && this.props.galleryItems.length > 3) {
      shouldShowScrollIndicator = true;
      numMoreCharts -= 3;
    }

    return (<div id="staticOuterDiv" className="recommendationStaticContentOuter" onScroll={this.handleScroll}>
        <div id="mult-graph-container" className= "recommendationContentInner">
            {this.props.galleryItems}
        </div>
        <div id="scroll-indicator-background" style={{visibility: this.state.scrollIndicator && shouldShowScrollIndicator ? 'visible' : 'hidden' }}>
        <p id="scroll-indicator" style={{visibility: this.state.scrollIndicator && shouldShowScrollIndicator ? 'visible' : 'hidden' }}>{numMoreCharts} more charts <i id='first-arrow' className='fa fa-chevron-right'></i><i id='second-arrow' className='fa fa-chevron-right'></i> </p>
        </div>
    </div>)
  }
}
export default ScrollableContent;