const { merge } = require('webpack-merge');
const common = require('./webpack.common.js');
const ErrorOverlayPlugin = require('error-overlay-webpack-plugin')
const ESLintPlugin = require('eslint-webpack-plugin');

module.exports = merge(common, {
    mode: 'development',
    devtool: 'cheap-module-source-map',
    stats: 'errors-warnings',
    plugins: [new ErrorOverlayPlugin(), new ESLintPlugin()],
    devServer: {
        historyApiFallback: true,
        port: 8080,
        compress: true,
        client: {
            logging: 'none',
        }
    }
});