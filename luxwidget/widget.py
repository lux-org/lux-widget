#!/usr/bin/env python
# coding: utf-8
from ipywidgets import DOMWidget
from traitlets import Unicode, Int, List, Dict
from ._frontend import module_name, module_version
import json


class LuxWidget(DOMWidget):
    _model_name = Unicode("LuxModel").tag(sync=True)
    _model_module = Unicode(module_name).tag(sync=True)
    _model_module_version = Unicode(module_version).tag(sync=True)
    _view_name = Unicode("LuxWidgetView").tag(sync=True)
    _view_module = Unicode(module_name).tag(sync=True)
    _view_module_version = Unicode(module_version).tag(sync=True)

    current_vis = Dict({}).tag(sync=True)
    recommendations = List([]).tag(sync=True)
    data = List([]).tag(sync=True)
    _selectedVisIdxs = Dict({}).tag(sync=True)
    deletedIndices = Dict({}).tag(sync=True)
    intent = Unicode("").tag(sync=True)
    selectedIntentIndex = Dict({}).tag(sync=True)
    message = Unicode("").tag(sync=True)

    def __init__(
        self, currentVis=None, recommendations=None, intent=None, message=None, **kwargs
    ):
        super().__init__(**kwargs)
        self.current_vis = currentVis
        self.recommendations = recommendations
        self.intent = intent
        self.message = message
