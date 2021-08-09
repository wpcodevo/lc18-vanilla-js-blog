const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const Dotenv = require("dotenv-webpack");
const DotenvFlow = require("dotenv-flow-webpack");

module.exports = {
  entry: "./src/index.js",
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, "public"),
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, "./template", "index.html"),
    }),
    new DotenvFlow(),
  ],
  devServer: {
    contentBase: path.resolve(__dirname, "./template"),
    port: 3000,
    open: true,
  },
};
