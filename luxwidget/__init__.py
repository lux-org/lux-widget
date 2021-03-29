#!/usr/bin/env python
# coding: utf-8

from .widget import LuxWidget
from ._version import __version__, version_info
from .nbextension import _jupyter_nbextension_paths
import json
from pathlib import Path

HERE = Path(__file__).parent.resolve()

with (HERE / "labextension" / "package.json").open() as fid:
    data = json.load(fid)

def _jupyter_labextension_paths():
    return [{
        "src": "labextension",
        "dest": data["name"]
    }]