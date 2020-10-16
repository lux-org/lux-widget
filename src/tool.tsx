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