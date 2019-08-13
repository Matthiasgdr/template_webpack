const path = require('path')
const CleanWebpackPlugin = require('clean-webpack-plugin')
const webpackMerge = require('webpack-merge')
const commonConfiguration = require('./webpack.common.js')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const isDevelopment = process.env.NODE_ENV === 'development'

module.exports = webpackMerge(
    commonConfiguration, {
        mode: 'production',
        plugins: [
            new MiniCssExtractPlugin({
                filename: isDevelopment ? 'style.css' : 'style.[hash].css',
                chunkFilename: isDevelopment ? '[id].css' : '[id].[hash].css'
            }),
            new CleanWebpackPlugin(['dist'], {
                root: path.resolve(__dirname, '..')
            }),
        ],
        module: {
            rules: [

                {
                    test: /\.css$/,
                    use: [
                        MiniCssExtractPlugin.loader,
                        'css-loader'
                    ]
                },
                {
                    test: /\.styl$/,
                    use: [
                        MiniCssExtractPlugin.loader,
                        'css-loader',
                        'stylus-loader',
                    ]
                }
            ]
        }
    }
)