const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  mode: "development",

  entry: "./public/javascripts/main.js",

  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, "dist"),
    clean: true,
  },

  devServer: {
    static: "./dist",
    port: 3000,
    open: true,
    hot: true,
  },

  module: {
    rules: [
      {
        test: /\.css$/i,
        use: [
          "style-loader",
          "css-loader",
          "postcss-loader",
        ],
      },


       {
      test: /\.(woff2?|ttf|otf|eot)$/i,
      type: 'asset/resource',
      generator: {
        filename: 'fonts/[name][ext]',
      },
    },
    ],


  },

  

  // plugins: [
  //   new HtmlWebpackPlugin({
  //     template: "./public/index.html",
  //   }),
  // ],
};