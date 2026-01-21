const path = require("path");
const mode = process.env.NODE_ENV || "development";
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const devMode = mode === "development";
const target = devMode ? "web" : "browserslist";
const devtool = devMode ? "source-map" : undefined;
module.exports = {
  mode,
  target,
  devtool,
  devServer: {
    port: 5000,
    open: true,
    hot: true,
  },
  entry: [
    "@babel/polyfill",
    path.resolve(__dirname, "public/javascripts", "main.js"),
  ],
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "main.js",
    clean: true,
    assetModuleFilename: "assets/[name][ext]",
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, "public", "index.html"),
       filename: 'index.html',
     
    }),
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, "public", "services.html"),
      filename: 'services.html',
     
    }),
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, "public", "laraveldevelopment.html"),
      filename: 'laraveldevelopment.html',
     
    }),
     new HtmlWebpackPlugin({
      template: path.resolve(__dirname, "public", "articletitle.html"),
      filename: 'articletitle.html',
     
    }),
     new HtmlWebpackPlugin({
      template: path.resolve(__dirname, "public", "CaseStudies.html"),
      filename: 'CaseStudies.html',
     
    }),
      new HtmlWebpackPlugin({
      template: path.resolve(__dirname, "public", "FashionMarketplacePlatform.html"),
      filename: 'FashionMarketplacePlatform.html',
     
    }),
       new HtmlWebpackPlugin({
      template: path.resolve(__dirname, "public", "AboutUs.html"),
      filename: 'AboutUs.html',
     
    }),
       new HtmlWebpackPlugin({
      template: path.resolve(__dirname, "public", "blog.html"),
      filename: 'blog.html',
     
    }),
      new HtmlWebpackPlugin({
      template: path.resolve(__dirname, "public", "Careers.html"),
      filename: 'Careers.html',
     
    }),
     new HtmlWebpackPlugin({
      template: path.resolve(__dirname, "public", "ContactUs.html"),
      filename: 'ContactUs.html',
     
    }),
   
    new MiniCssExtractPlugin({
      filename: "style.css",
    }),
  ],

  module: {
    rules: [
      {
        test: /\.(c|sa|sc)ss$/i,
        use: [
          MiniCssExtractPlugin.loader,
          "css-loader",
          {
            loader: "postcss-loader",
            options: {
              postcssOptions: { plugins: [require("postcss-preset-env")] },
            },
          },
          "sass-loader",
        ],
      },
      {
        test: /\.(?:js|mjs|cjs)$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            targets: "defaults",
            presets: [["@babel/preset-env"]],
          },
        },
      },
      {
        test: /\.woff2?$/i,
        type: "asset/resource",
        generator: {
          filename: "fonts/[name].[ext]",
        },
      },
      {
        test: /\.(jpe?g | png| webp | gif | svg)$/i,
        type: "asset/resource",
        use: [
          {
            loader: "image-webpack-loader",
            options: {
              mozjpeg: {
                progressive: true,
              },
              // optipng.enabled: false will disable optipng
              optipng: {
                enabled: false,
              },
              pngquant: {
                quality: [0.65, 0.9],
                speed: 4,
              },
              gifsicle: {
                interlaced: false,
              },
              // the webp option will enable WEBP
              webp: {
                quality: 75,
              },
            },
          },
        ],
      },
    ],
  },
};
