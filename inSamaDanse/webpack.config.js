import path from 'path';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import MiniCssExtractPlugin from "mini-css-extract-plugin";
import CssMinimizerPlugin from "css-minimizer-webpack-plugin";

export default {
  mode: 'development', // или 'production'
  entry: './public/javascripts/main.js',
  output: {
    filename: '[name].[contenthash].js',
    path: path.resolve('dist'),
    clean: true, // Очищает папку dist перед каждой сборкой
  },

  module: {
    rules: [
      {
        test: /\.css$/i,
        use: [MiniCssExtractPlugin.loader, "css-loader"],
      },
    ],
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: "[name].css",
    }),
  ],
  optimization: {
    minimizer: [
      `...`, // Сохраняет стандартные настройки минимизации JS (Terser)
      new CssMinimizerPlugin(), // Подключает сжатие CSS
    ],
  },
  
};