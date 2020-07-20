#!/usr/bin/env python
# coding: utf-8
from ipywidgets import DOMWidget
from traitlets import Unicode, Int, List, Dict
from ._frontend import module_name, module_version
import json

class LuxWidget(DOMWidget):
    _model_name = Unicode('ExampleModel').tag(sync=True)
    _model_module = Unicode(module_name).tag(sync=True)
    _model_module_version = Unicode(module_version).tag(sync=True)
    _view_name = Unicode('JupyterWidgetView').tag(sync=True)
    _view_module = Unicode(module_name).tag(sync=True)
    _view_module_version = Unicode(module_version).tag(sync=True)

    current_vis = Dict({}).tag(sync=True)
    recommendations = List([]).tag(sync=True)
    data = List([]).tag(sync=True)
    _exportedVisIdxs = Dict({}).tag(sync=True)
    context = Dict({}).tag(sync=True)
    def __init__(self, currentView=None, recommendations=None, spec=None, opt=None, context=None, **kwargs):
        super().__init__(**kwargs)
        self._opt_source = json.dumps(opt)
        self.current_context = currentView
        self.recommendations = recommendations
        self.context = context
