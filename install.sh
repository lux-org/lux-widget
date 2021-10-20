#npm install # run only for the first time 
pip uninstall -y lux-widget
jupyter nbextension uninstall luxwidget
jupyter nbextension disable luxwidget
npx webpack # builds tsx --> ts --> js
cp package.json luxwidget/nbextension/ # copy latest package.json over
pip install . # builds python wheel and copies relevant js files to luxwidget/
# When rebuild, these two lines don't need to be rerun since the code is symlinked
jupyter nbextension install --sys-prefix --symlink --overwrite --py luxwidget
jupyter nbextension enable --sys-prefix --py luxwidget
