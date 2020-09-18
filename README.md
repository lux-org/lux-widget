<p align="center"><a href="#"><img width=77% alt="" src="https://github.com/lux-org/lux-resources/blob/master/readme_img/logo.png?raw=true"></a></p>

<p align="center">
    <a href="https://badge.fury.io/js/lux-widget"><img src="https://badge.fury.io/js/lux-widget.svg" alt="npm version" height="18" align="center"></a>
</p>

Lux is a library that makes data science easier by automating certain aspects of the data exploration process. Lux is designed to facilitate faster experimentation with data, even when the user does not have a clear idea of what they are looking for.

The [core Lux API](https://github.com/lux-org/lux/) is written in Python. This is the Jupyter widget extension for Lux, written in Typescript and React. 

Here is an example of the Lux widget in action. 

<img src="https://github.com/lux-org/lux-resources/blob/master/readme_img/basicDemo.gif?raw=true"
     alt="Basic recommendations in Lux"
     style="width:900px" />

You can find the full demo example in this live [notebook](https://mybinder.org/v2/gh/lux-org/lux-binder/master?urlpath=tree/examples/demo/college_demo.ipynb). 


# Installation

To get started, install the Lux Jupyter widget through [npm](https://www.npmjs.com/package/lux-widget): 

```bash
    npm i lux-widget
```

### Dev Installation

To install the widget for dev purposes, we need to install webpack:  

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
For detailed reference or troubleshooting tips, please refer to the [documentation page](https://lux-api.readthedocs.io/en/latest/). Lux is an early stage project and undergoing active development. Please report any bugs, issues, or requests through [Github Issues](https://github.com/lux-org/lux/issues) or post on the [#help](https://lux-project.slack.com/archives/C0174H16CK0) channel in the <a href="http://lux-project.slack.com/">Lux Slack org</a>.
