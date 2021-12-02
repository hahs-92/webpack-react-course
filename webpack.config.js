const path = require('path')
//html
const HtmlWebpackPlugin = require('html-webpack-plugin')

/** @type {import('webpack').Configuration} */

module.exports = {
    entry: './src/index.js',
    output: {
        path : path.resolve(__dirname, 'dist'),
        filename: '[name].[contenthash].js',
        clean: true
    },
    devServer: {
        static: {
            directory: path.join(__dirname, 'dist'),
            watch: true
        },
        watchFiles: path.join(__dirname, './**'),
        compress: true,
        historyApiFallback: true,
        port: 5005,
        open: true
    },
    resolve: {
        extensions: ['.js','.jsx']
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader'
                }
            },
            {
                test: /\.html$/,
                use: [
                    { loader: 'html-loader' }
                ]
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './public/index.html',
            filename: './index.html'
        })
    ]
}