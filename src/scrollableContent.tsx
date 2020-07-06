import React, { Component } from 'react';
import {dispatchLogEvent} from './utils';
class ScrollableContent extends Component<{galleryItems: JSX.Element[],title:string},any>  {
  constructor(props:any){
    super(props)
    this.state = {
        isScrolling:false,
        firstScroll:true
    }
    this.handleScroll = this.handleScroll.bind(this)    
    this.scrollStartStopListener = this.scrollStartStopListener.bind(this)    
    
  }
  handleScroll(event) {
    var component = this;
    this.scrollStartStopListener(function(){
        dispatchLogEvent("stopScroll",component.props.title)
        component.setState({
            firstScroll:true
        })
      })
  }

  scrollStartStopListener(callback:CallableFunction) { 
	if (!callback || typeof callback !== 'function') return;
    if (this.state.firstScroll){
        dispatchLogEvent("startScroll",this.props.title)
        this.setState({
            firstScroll:false
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
    return (<div id="staticOuterDiv" className="recommendationStaticContentOuter" onScroll={this.handleScroll}>
        <div id="mult-graph-container" className= "recommendationContentInner">
            {this.props.galleryItems}
        </div>
    </div>)
  }
}
export default ScrollableContent;