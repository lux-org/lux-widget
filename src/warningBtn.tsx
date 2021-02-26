import React, { Component } from 'react';
import { WarningBtnProps } from './interfaces/warningBtnProps';
// import { constants } from 'zlib';

class WarningBtn extends Component<WarningBtnProps> {
    constructor(props:any) {
        super(props);
    }

    render() {
      const{ message, toggleWarningPanel, openWarning } = this.props;
      let warnBtn;
      let warnMsg;


      if (message!=""){
        warnBtn = <i  id="warnBtn" 
                        className='fa fa-exclamation-triangle'
                        onClick={(e)=>toggleWarningPanel(e)}/>;
        warnMsg = <div className="warning-footer" style={{display: (openWarning) ? 'flex' : 'none' }} >
          <p className="warnMsgText" dangerouslySetInnerHTML={{__html: message}}></p> 
        </div>;
      }
        return (
          <div>
            {warnBtn}
            {warnMsg}
          </div>
          );
    }
}
export default WarningBtn;
