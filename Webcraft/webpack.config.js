import path from "path";

import MiniCssExtractPlugin from "mini-css-extract-plugin";

import CssMinimizerPlugin from "css-minimizer-webpack-plugin";


export default {

    mode: "production",
    

    entry: "./public/javascripts/main.js",

    output: {

        filename: "[name].[contenthash].js",

        path: path.resolve("dist"),

        clean: true,

    },


    module: {

        rules: [

            {

                test: /\.css$/i,

                use: [

                    MiniCssExtractPlugin.loader,

                    {
                        loader: "css-loader",
                        options: {
                url: false,
            },
                    },

                    {
                        loader: "postcss-loader",
                    },

                ],

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

            "...",

            new CssMinimizerPlugin(),

        ],

    },

};