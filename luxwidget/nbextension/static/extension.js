// Entry point for the notebook bundle containing custom model definitions.

define([
    'base/js/namespace'
], function(
    Jupyter
) {
    function load_ipython_extension() {
        "use strict";

        // TODO: Looking to disable shortcuts here but not working yet
        // Jupyter.keyboard_manager.disable();

        window['requirejs'].config({
            map: {
                '*': {
                    'luxwidget': 'nbextensions/luxwidget/index',
                },
            }
        });
    }

    return {
        load_ipython_extension: load_ipython_extension
    };
});
