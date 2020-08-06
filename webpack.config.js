/*
 * @Date: 2020-08-06 10:55:42
 * @LastEditors: liujunfei
 * @LastEditTime: 2020-08-06 16:22:48
 * @Description: 
 */

const HtmlWebpackPlugin = require("html-webpack-plugin");
const path = require('path');
const config = {
    mode: 'development',
    entry: {
        main: './src/main.tsx'
    },
    module: {
        rules: [
            {
                test: /\.tsx$/,
                use: [
                    { loader: 'ts-loader' },
                ],
            },
            {
                test: /\.js|\.jsx$/,
                loader: 'babel-loader'
            },
            {
                test: /\.less|\.css$/,
                use: [
                    { loader: 'style-loader' },
                    { loader: 'css-loader' },
                    { loader: 'postcss-loader' },
                    { loader: 'less-loader' }
                ]
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            filename: 'index.html',
            template: path.join(__dirname, './src/index.html')
        })
    ],
    resolve: {
        // 自动补全文件名后缀
        extensions: ['.js', '.jsx', '.json', '.tsx'],
        alias: {}
    }
}
module.exports = config;