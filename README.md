<p align="center"><a href="#"><img width=77% alt="" src="https://github.com/lux-org/lux-resources/blob/master/readme_img/logo.png?raw=true"></a></p>

<!-- <p align="center">
    <a href="https://badge.fury.io/js/lux-widget"><img src="https://badge.fury.io/js/lux-widget.svg" alt="npm version" height="18" align="center"></a>
</p> -->

Lux is a library designed to make data science easier and facilitate fast experimentation with data.
You can learn more about Lux by referring to the core [Lux API](https://github.com/lux-org/lux/) in Python. 
This is the Jupyter widget frontend for Lux, written in Typescript and React. 

Here is an example of the Lux widget in action. 

<img src="https://github.com/lux-org/lux-resources/blob/master/readme_img/basicDemo.gif?raw=true"
     alt="Basic recommendations in Lux"
     style="width:900px" />

You can find the full demo example in this live [notebook](https://mybinder.org/v2/gh/lux-org/lux-binder/master?urlpath=tree/examples/demo/college_demo.ipynb). 


# Installation

To get started, the Lux Jupyter widget can be installed through PyPI: 

```bash
    pip install lux-widget
```

To install and activate the Jupyter notebook extension: 

```bash
    jupyter nbextension install --sys-prefix --symlink --overwrite --py luxwidget
    jupyter nbextension enable --sys-prefix --py luxwidget
```

If the installation happens correctly, you should see two `- Validating: OK` after executing the two lines above.
If you encounter issues with the installation, please refer to [this page](https://lux-api.readthedocs.io/en/latest/source/guide/FAQ.html#troubleshooting-tips) to troubleshoot the installation.

### Dev Installation

To install the widget for dev purposes, we need to install npm and webpack:  

```bash
    npm install --save-dev webpack webpack-cli
```

Then, we can install the [Lux Jupyter widget](https://github.com/lux-org/lux-widget) using the custom installation script: 

```bash
    git clone https://github.com/lux-org/lux-widget.git
    cd lux-widget/
    npm install
    bash install.sh
```

# Documentation and Support
For detailed reference, please refer to the [documentation page](https://lux-api.readthedocs.io/en/latest/). Please report any bugs, issues, or requests through [Github Issues](https://github.com/lux-org/lux/issues) or post on the [#help](https://lux-project.slack.com/archives/C0174H16CK0) channel in the <a href="http://lux-project.slack.com/">Lux Slack org</a>.
