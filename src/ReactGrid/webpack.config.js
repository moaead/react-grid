﻿var path = require("path");
var webpack = require("webpack");

module.exports = {
    devtool: "eval",
    //debug: true,
    entry: [
        "webpack-dev-server/client?http://localhost:3000",
        "webpack/hot/only-dev-server",
        "./src/index"
    ],
    resolve: {
        extensions: ["", ".webpack.js", ".web.js", ".ts", ".tsx", ".js"]
    },
    output: {
        path: path.join(__dirname, "dist"),
        filename: "bundle.js",
        publicPath: "/static/"
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin(),
        new webpack.ProvidePlugin({
            $: "jquery",
            jQuery: "jquery"
        })
    ],

    module: {
        loaders: [
            {
                test: /\.tsx$/,
                loaders: ["react-hot", "ts-loader"]
            },
            {
                test: /\.(eot.*|woff.*|woff2.*|ttf.*|svg.*|png.*|jpg.*|gif.*)/,
                loader: "url-loader?limit=30000&name=[name]-[hash].[ext]"
            }, {
                test: /\.scss$/,
                loaders: ["style", "css", "resolve-url", "sass?sourceMap"]
            }, {
                test: /\.less$/,
                loader: "style!css!less"
            }
            , {
                test: /\.css$/,
                loader: "style-loader!css-loader"
            }
        ]
    }
};
