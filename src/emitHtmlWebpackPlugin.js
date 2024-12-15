// If your plugin is direct dependent to the html webpack plugin:
// const HtmlWebpackPlugin = require('html-webpack-plugin');
// If your plugin is using html-webpack-plugin as an optional dependency
// you can use https://github.com/tallesl/node-safe-require instead:
// const HtmlWebpackPlugin = require('safe-require')('html-webpack-plugin');

class EmitHtmlWebpackPlugin {
    // constructor(options) {
    //     this.option = options;
    // }
    apply (compiler) {
        compiler.hooks.compilation.tap('EmitHtmlWebpackPlugin', (compilation) => {
            compilation.hooks.processAssets.tap({
                stage: compilation.PROCESS_ASSETS_STAGE_OPTIMIZE,
                name:'EmitHtmlWebpackPlugin'
            },() => {
                compilation.getAssets().forEach((asset, key) => {
                    compilation.deleteAsset(asset.name);
                });
            });
            // const hooks = HtmlWebpackPlugin.getHooks(compilation);            
            // hooks.beforeAssetTagGeneration.tapAsync('EmitHtmlWebpackPlugin', (data, callback) => {
            //     callback(null, data);
            // });
        })
    }
}

module.exports = EmitHtmlWebpackPlugin