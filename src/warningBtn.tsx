import React, { Component } from 'react';
import { WarningBtnProps } from './interfaces/warningBtnProps';

class WarningBtn extends Component<WarningBtnProps> {
    constructor(props:any) {
        super(props);
    }

    render() {
      const{ message, openPanel, closePanel, openWarning } = this.props;
      let warnBtn;
      let warnMsg;
      if (message!=""){
        warnBtn = <i  id="warnBtn" 
                        className='fa fa-exclamation-triangle'
                        onClick={(e)=>openPanel(e)}/>;
        warnMsg = <div className="warning-footer" style={{display: (openWarning) ? 'flex' : 'none' }} >
        <p className="warnMsgText" dangerouslySetInnerHTML={{__html: message}}></p> 
        <i className="fa fa-window-close" aria-hidden="true" onClick={(e)=>closePanel(e)}
        style={{position: 'absolute', right: '15px', fontSize: '15px' }}
        ></i> 
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
