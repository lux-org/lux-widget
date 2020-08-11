<p align="center"><a href="#"><img width=77% alt="" src="https://github.com/lux-org/lux/blob/master/examples/img/logo.png?raw=true"></a></p>

<p align="center">
    <a href="https://badge.fury.io/js/lux-widget"><img src="https://badge.fury.io/js/lux-widget.svg" alt="npm version" height="18" align="center"></a>
</p>

Lux is a library that makes data science easier by automating certain aspects of the data exploration process. Lux is designed to facilitate faster experimentation with data, even when the user does not have a clear idea of what they are looking for.

The [core Lux API](https://github.com/lux-org/lux/) is written in Python. This is the Jupyter widget extension for the Lux API, written in Typescript and React. 


```bash
pip install git+https://github.com/lux-org/lux-widget
jupyter nbextension install --py luxWidget
jupyter nbextension enable --py luxWidget
```

<!-- To get started, install the Lux Jupyter widget through [npm](https://www.npmjs.com/package/lux-widget): npm i lux-widget -->


Here is an example of the lux-widget in action. The widget is generated based on commands to the Lux API. Users can interact with the widget and export selected visualizations into variables.

<img src="https://github.com/lux-org/lux-widget/blob/master/examples/lux-widget-demo.gif?raw=true"
     alt="Lux Widget"
     style="width:600px" />

You can find an example in this demo [notebook](https://github.com/lux-org/lux/blob/master/examples/demo.ipynb). 

# Dev Installation

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
