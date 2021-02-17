import React, { Component } from 'react';
import { InfoBtnProps } from './interfaces/infoBtnProps';

class InfoBtn extends Component<InfoBtnProps> {
    constructor(props:any) {
        super(props);
    }

    render() {
      const{ message, toggleInfoPanel, openInfo } = this.props;
      let infoBtn;
      let infoMsg;
      if (message!=""){
        infoBtn = <i  id="infoBtn" 
                        className='fa fa-info-circle'
                        onClick={(e)=>toggleInfoPanel(e)}/>;
        infoMsg = <div className="info-footer" style={{display: (openInfo) ? 'flex' : 'none' }} >
        <p className="infoMsgText" dangerouslySetInnerHTML={{__html: message}}></p>
        </div>;
      }
        return (
          <span>
            {infoBtn}
            {infoMsg}
          </span>
          );
    }
}
export default InfoBtn;
