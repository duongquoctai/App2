const { merge } = require('webpack-merge');
const common = require('./webpack.common.js');
const ErrorOverlayPlugin = require('error-overlay-webpack-plugin')

module.exports = merge(common, {
    mode: 'development',
    devtool: 'cheap-module-source-map',
    stats: 'errors-warnings',
    plugins: [new ErrorOverlayPlugin()],
    devServer: {
        historyApiFallback: true,
        client: {
            logging: 'none',
        }
    }
});