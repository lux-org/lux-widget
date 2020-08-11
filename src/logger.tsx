// import { EventEmitter } from 'events';
// import React, { Component } from 'react';

// class Logger extends Component<any> {
//     constructor(props:any) {
//         super(props);
//     }
//     writeToLog(msg:string){
//         console.log(msg)
//     }
    
// }
var JupyterReact = require('jupyter-react-js');

// an object of react components available in your project. 
var components = require('./components');

function load_ipython_extension () {
  require([
      "base/js/namespace",
      "base/js/events",
  ], function( Jupyter, events ) {
      JupyterReact.init( Jupyter, events, "some.custom.name", { components } );

      Jupyter.notebook.events.on("execute.CodeCell", function(evt, data) {
        const code = data.cell.get_text();
        // get cell id
        const id = data.cell.cell_id;
        const idx = Jupyter.notebook.find_cell_index(data.cell);
        const time = new Date();
        const type = "execution";
        console.log({
            type,
            code,
            id,
            idx,
            time
        })
    });

  });
}
