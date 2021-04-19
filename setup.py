#!/usr/bin/env python
# coding: utf-8

# Copyright (c) Jupyter Development Team.
# Distributed under the terms of the Modified BSD License.

import json
from pathlib import Path

import setuptools

HERE = Path(__file__).parent.resolve()

# The name of the project
name = "luxwidget"

lab_path = (HERE / name / "labextension")
nb_path = (HERE / name / "nbextension")

# Representative files that should exist after a successful build
jstargets = [
    str(lab_path / "package.json"),
]

package_data_spec = {
    name: ["*"],
}

labext_name = "luxwidget"

try:
    from jupyter_packaging import (
        create_cmdclass,
        install_npm,
        ensure_targets,
        combine_commands,
        skip_if_exists
    )
    data_files_spec = [
    ("share/jupyter/labextensions/%s" % labext_name, str(lab_path), "**"),
    ("share/jupyter/labextensions/%s" % labext_name, str(HERE), "install.json"),
    ("share/jupyter/nbextensions/%s" % name, str(nb_path), '**'),
    ]

    cmdclass = create_cmdclass("jsdeps",
        package_data_spec=package_data_spec,
        data_files_spec=data_files_spec
    )

    js_command = combine_commands(
        install_npm(HERE, build_cmd="build:prod", npm=["jlpm"]),
        ensure_targets(jstargets),
    )

    is_repo = (HERE / ".git").exists()
    if is_repo:
        cmdclass["jsdeps"] = js_command
    else:
        cmdclass["jsdeps"] = skip_if_exists(jstargets, js_command)

except ImportError:
    print("jupyter-packaging is not installed. Please install via 'pip install jupyter-packaging'")
    cmdclass = {}

long_description = (HERE / "README.md").read_text()

# Get the package info from package.json
pkg_json = json.loads((HERE / "package.json").read_bytes())

setup_args = dict(
    name="lux-widget",
    version=pkg_json["version"],
    url=pkg_json["homepage"],
    author=pkg_json["author"]["name"],
    author_email=pkg_json["author"]["email"],
    description=pkg_json["description"],
    license=pkg_json["license"],
    long_description=long_description,
    long_description_content_type="text/markdown",
    cmdclass=cmdclass,
    packages=setuptools.find_packages(),
    install_requires=[
        "notebook >= 4.0.0",
        "ipywidgets >=7.5.0",
    ],
    zip_safe=False,
    include_package_data=True,
    python_requires=">=3.6",
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
        "Programming Language :: Python",
        "Programming Language :: Python :: 3",
        "Programming Language :: Python :: 3.6",
        "Programming Language :: Python :: 3.7",
        "Programming Language :: Python :: 3.8",
        "Programming Language :: Python :: 3.9",
        "Framework :: Jupyter",
        "Development Status :: 1 - Planning",
        "Intended Audience :: Developers",
        "Intended Audience :: Science/Research",
        "Intended Audience :: Other Audience",
        "Topic :: Scientific/Engineering :: Information Analysis",
        "Topic :: Scientific/Engineering :: Visualization",
        "License :: OSI Approved :: Apache Software License",
    ],
)


if __name__ == "__main__":
    setuptools.setup(**setup_args)