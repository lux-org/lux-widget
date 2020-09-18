import React, { Component } from 'react';
interface toolProps{
    graphIdx:number
}
class ToolComponent extends Component<toolProps,any> {
    constructor(props:toolProps) {
        super(props);
    }
    render() {
        let toolDivId = "toolDiv-".concat(this.props.graphIdx.toString())
        return (
            <div className="toolDiv" id ={toolDivId}>
                <i className='fa-check fa' 
                   title='Mark visualization as Selected' 
                >    
                </i>
            </div>
        );
    }
}
export default ToolComponent;