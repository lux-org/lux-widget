#!/usr/bin/env python
# coding: utf-8

# Copyright (c) Jupyter Development Team.
# Distributed under the terms of the Modified BSD License.

from __future__ import print_function
from glob import glob
from os.path import join as pjoin
from os import path


from setupbase import (
    create_cmdclass,
    install_npm,
    ensure_targets,
    find_packages,
    combine_commands,
    ensure_python,
    get_version,
    HERE,
)

from setuptools import setup

HERE = path.abspath(path.dirname(__file__))

# Get the long description from the README file
with open(path.join(HERE, "README.md"), encoding="utf-8") as f:
    long_description = f.read()

install_requires = [
    "jupyter",
    "notebook >= 4.0.0",
    "ipywidgets >=7.5.0",
]

# with open(path.join(HERE, 'requirements.txt')) as fp:
#     install_requires = fp.read()

# The name of the project
name = "luxwidget"

# Ensure a valid python version
ensure_python(">=3.4")

# Get our version
version = get_version(pjoin(name, "_version.py"))

nb_path = pjoin(HERE, name, "nbextension", "static")
lab_path = pjoin(HERE, name, "labextension")

# Representative files that should exist after a successful build
jstargets = [
    pjoin(nb_path, "index.js"),
    pjoin(HERE, "lib", "plugin.js"),
]

package_data_spec = {name: ["nbextension/static/*.*js*", "labextension/*.tgz"]}

data_files_spec = [
    ("share/jupyter/nbextensions/luxwidget", nb_path, "*.js*"),
    ("share/jupyter/lab/extensions", lab_path, "*.tgz"),
    ("etc/jupyter/nbconfig/notebook.d", HERE, "luxwidget.json"),
]


cmdclass = create_cmdclass(
    "jsdeps", package_data_spec=package_data_spec, data_files_spec=data_files_spec
)

cmdclass["jsdeps"] = combine_commands(
    install_npm(HERE, build_cmd="build:all"),
    ensure_targets(jstargets),
)


setup(
    name="luxwidget",
    description="Jupyter Widget for Intelligent Data Discovery",
    long_description=long_description,
    long_description_content_type="text/markdown",
    version=version,
    scripts=glob(pjoin("scripts", "*")),
    cmdclass=cmdclass,
    packages=find_packages(),
    author="Doris Jung-Lin Lee",
    author_email="dorisjunglinlee@gmail.com",
    url="https://github.com/lux-org/luxwidget",
    license="Apache-2.0 License",
    platforms="Linux, Mac OS X, Windows",
    keywords=[
        "Jupyter",
        "Widgets",
        "Visualization",
        "Analytics",
        "Data Science",
        "Data Analysis",
        "IPython",
    ],
    classifiers=[
        "Development Status :: 1 - Planning",
        "Intended Audience :: Developers",
        "Intended Audience :: Science/Research",
        "Intended Audience :: Other Audience",
        "Topic :: Scientific/Engineering :: Information Analysis",
        "Topic :: Scientific/Engineering :: Visualization",
        "License :: OSI Approved :: Apache Software License",
        "Programming Language :: Python :: 3",
        "Framework :: Jupyter",
    ],
    include_package_data=True,
    setup_requires=install_requires,
    install_requires=install_requires,
)
