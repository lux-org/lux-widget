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

// import {
//   Application, IPlugin
// } from '@Lumino/application';

// import {
//   Widget
// } from '@Lumino/widgets';

// import {
//   IJupyterWidgetRegistry
//  } from '@jupyter-widgets/base';

// import * as widgetExports from './widget';

// import {
//   MODULE_NAME, MODULE_VERSION
// } from './version';

// const EXTENSION_ID = 'lux-widget:plugin';

// /**
//  * The Lux plugin.
//  */
// const plugin: IPlugin<Application<Widget>, void> = {
//   id: EXTENSION_ID,
//   requires: [IJupyterWidgetRegistry],
//   activate: activateWidgetExtension,
//   autoStart: true,
// };

// export default plugin;

// /**
//  * Activate the widget extension.
//  */
// function activateWidgetExtension(app: Application<Widget>, registry: IJupyterWidgetRegistry): void {
//   registry.registerWidget({
//     name: MODULE_NAME,
//     version: MODULE_VERSION,
//     exports: widgetExports,
//   });
// }

import {
  JupyterFrontEnd,
  JupyterFrontEndPlugin
} from '@jupyterlab/application';

import {
  MODULE_NAME, MODULE_VERSION
} from './version';

import {
  IJupyterWidgetRegistry
 } from '@jupyter-widgets/base';

 import * as widgetExports from './widget';

/**
 * Lux Extension
 */
const extension: JupyterFrontEndPlugin<void> = {
  id: MODULE_NAME,
  requires: [IJupyterWidgetRegistry],
  activate: (app: JupyterFrontEnd, widgets: IJupyterWidgetRegistry) => {
    // app.docRegistry.addWidgetExtension("Notebook", new NBWidgetExtension())

    widgets.registerWidget({
      name: MODULE_NAME,
      version: MODULE_VERSION,
      exports: widgetExports
    })
  },
  autoStart: true
};

export default extension;