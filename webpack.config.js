const HtmlWebpackPlugin = require("html-webpack-plugin");
const path = require('path')
const htmlPlugin = new HtmlWebpackPlugin({
    template: "./index.html",
    filename: "./index.html"
});

module.exports = {
    entry: "./src/index.js",
    output: {
        path: path.resolve(__dirname,"dist"),
        filename: "bundled.js"
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader"
                }
            },
            {
                test: /\.scss$/,
                use: [
                    {
                        loader:"style-loader" //Creates style nodes from JS Strings
                    },
                    {
                        loader: "css-loader" //translates CSS into CommonJS
                    },
                    {
                        loader: "sass-loader" //compiles Sass to CSS
                    }

                ]
            }
        ]
    },
    plugins: [htmlPlugin],
    devtool:'cheap-module-eval-source-map'
};