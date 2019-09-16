const path = require('path');
const merge = require('webpack-merge')
const common = require('./webpack.common')

const HtmlWebPackPlugin = require("html-webpack-plugin");

const htmlPlugin = new HtmlWebPackPlugin({
    template: "./src/index.html",
    filename: "./index.html",
});

module.exports = merge(common, {
    mode: 'development',
    output: {
        filename: 'js/main.js',
        path: path.resolve(__dirname, 'build'),
        publicPath: '/'
    },
    plugins: [htmlPlugin],
    module: {
        rules: [
            {
                test: /\.scss$/,
                use: ["style-loader", "css-loader", "sass-loader"]
            }
        ]
    }

});