const HtmlWebpackPlugin = require("html-webpack-plugin");
const Dotenv = require('dotenv-webpack');
const path = require("path");

module.exports = {
    entry: "./src/index.js",
    output: {
        filename: "bundle.[fullhash].js",
        path: path.resolve(__dirname, "build"),
        assetModuleFilename: "assets/[fullhash][ext][query]"
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: "./src/index.html",
            favicon: "./src/assets/fpt-icon.png"
        }),
        new Dotenv()
    ],
    resolve: {
        modules: [__dirname, "src", "node_modules"],
        extensions: ["*", ".js", ".jsx", ".tsx", ".ts"],
    },
    module: {
        rules: [
            {
                test: /\.js?$/,
                exclude: /node_modules/,
                loader: require.resolve("babel-loader"),
            },
            {
                test: /\.css$/,
                use: ["style-loader", "css-loader"],
            },
            {
                test: /\.(png|svg|jpe?g|gif)$/,
                type: "asset/resource"
            },
        ],
    },
};