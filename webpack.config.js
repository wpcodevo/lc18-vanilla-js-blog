const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const Dotenv = require("dotenv-webpack");

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
    new Dotenv(),
  ],
  devServer: {
    contentBase: path.resolve(__dirname, "./template"),
    port: 3000,
    open: true,
  },
};
