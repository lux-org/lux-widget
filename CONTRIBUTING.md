Lux is a project undergoing active development. If you are interested in contributing to Lux, the open tasks on [GitHub issues](https://github.com/lux-org/lux-widget/issues) (esp. issues labelled with the tag [`easy`](https://github.com/lux-org/lux-widget/labels/easy)) are good places for newcomers to contribute. This guide contains information on the workflow for contributing to the Lux Widget codebase. For any additional questions and issues, please post on the [Slack channel](https://join.slack.com/t/lux-project/shared_invite/zt-iwg84wfb-fBPaGTBBZfkb9arziy3W~g).

# Setting up Build and Installation Process

To setup Lux widget manually for development purposes, you should [fork](https://docs.github.com/en/github/getting-started-with-github/fork-a-repo) the Github repo and clone the forked version.

```bash
git clone https://github.com/USERNAME/lux-widget.git
```

To build the widget locally, you need to install npm and webpack:

```bash
    npm install --save-dev webpack webpack-cli
```

You can install lux-widget by building from the source code in your fork directly:

```bash
cd lux-widget/
npm install
sh install.sh
```

The `install.sh` transpiles the typescript files to javascript source, then packs everything into an `index.js` for the Jupyter Widget. Then we install the jupyter extension.

# Debugging and Testing with Jupyter

When you make a change to the source code in the `lux-widget/` folder, you can rebuild by doing this:

```bash
sh install.sh
```

If you are developing with JupyterLab, you can rebuild by running this command in the `lux-widget/` folder:

```bash
jupyter labextension install
```

On low memory systems or for faster build times, you can run:

```bash
jupyter lab build --minimize=False
```

We recommend working in JupyterLab as the build time is much faster than building for Notebook.

In order for the Jupyter extension to get updated, we need to restart the Jupyter notebook server by killing the currently running notebook, then restarting the kernel via `jupyter notebook` or `jupyter lab`.
