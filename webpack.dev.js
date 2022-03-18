const { merge } = require("webpack-merge");
const common = require("./webpack.common.js");
const ErrorOverlayPlugin = require("error-overlay-webpack-plugin");
const ESLintPlugin = require("eslint-webpack-plugin");
const ModuleFederationPlugin = require("webpack/lib/container/ModuleFederationPlugin");
const deps = require("./package.json").dependencies;

module.exports = merge(common, {
  mode: "development",
  devtool: "cheap-module-source-map",
  stats: "errors-warnings",
  plugins: [
    new ErrorOverlayPlugin(),
    new ESLintPlugin(),
    new ModuleFederationPlugin({
      name: "app2",
      filename: "remoteEntry.js",
      exposes: {
        "./routes": "./src/routes/index",
        "./App2": "./src/App",
      },
      shared: {
        ...deps,
        react: {
          singleton: true,
          requiredVersion: deps.react,
        },
        "react-dom": {
          singleton: true,
          requiredVersion: deps["react-dom"],
        },
      },
    }),
  ],
  devServer: {
    historyApiFallback: true,
    port: 8080,
    compress: true,
    client: {
      logging: "none",
    },
  },
});
