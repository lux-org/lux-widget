import React, { Component } from 'react';
import { ButtonProps } from './interfaces/buttonProps';
import { Alert } from 'react-bootstrap';

class ButtonsBroker extends Component<ButtonProps> {
    constructor(props:any) {
        super(props);
    }

    render() {
      const{ buttonsEnabled, tabItems, deleteSelection, exportSelection, setIntent, closeExportInfo, showAlert, intentEnabled } = this.props;

      let deleteBtn;
      let exportBtn;
      let intentBtn;
      let alertBox;

      if (tabItems.length > 0){
        if (buttonsEnabled) {
          deleteBtn = <i id="deleteBtn"
                         className="fa fa-trash"
                         title='Delete selected visualizations'
                         onClick={() => deleteSelection()} />
          exportBtn = <i  id="exportBtn" 
                          className='fa fa-upload' 
                          title='Export selected visualizations into variable'
                          onClick={(e) => exportSelection()} />
               
        } else {
          deleteBtn = <i id="deleteBtn"
                         className="fa fa-trash"
                         style={{opacity: 0.2, cursor: 'not-allowed'}}
                         title='Select one or more visualizations to delete' />
          exportBtn = <i  id="exportBtn" 
                          className= 'fa fa-upload'
                          style={{opacity: 0.2, cursor: 'not-allowed'}}
                          title='Select one or more visualizations to export into variable' />
        }

        if (buttonsEnabled && intentEnabled) {
          intentBtn = <i  id="intentBtn"
                          className="fa fa-search"
                          title='Set selected visualization as intent'
                          onClick={() => setIntent()} /> 
        } else {
          intentBtn = <i  id="intentBtn"
                          className="fa fa-search"
                          style={{opacity: 0.2, cursor: 'not-allowed'}}
                          title='Select no more than one visualization to set as intent' />
        }
      }

      if (showAlert){
        alertBox= <Alert id="alertBox" 
                         key="infoAlert" 
                         variant="info" 
                         onClose={() => closeExportInfo()} 
                         dismissible>
                    Access exported visualizations via the property `exported` (<a href="https://lux-api.readthedocs.io/en/latest/source/guide/export.html" target="_blank">More details</a>)
                  </Alert>
      }

      return (
        <div>
          {deleteBtn}
          {alertBox}
          {intentBtn}
          {exportBtn}
        </div>
        );
    }
}
export default ButtonsBroker;
