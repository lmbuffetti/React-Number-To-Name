const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const outputDirectory = 'dist';
const devMode = process.env.NODE_ENV !== 'production';

module.exports = {
    entry: ['babel-polyfill', './src/client/index.jsx', './src/assets/styles/main.scss'],
    output: {
        path: path.join(__dirname, outputDirectory),
        filename: 'js/[name].bundle.js',
        chunkFilename: 'js/[name].[hash].js',

    },
    module: {
        rules: [{
            test: /\.(js|jsx)$/,
            exclude: /node_modules/,
            use: {
                loader: 'babel-loader',
            },
        },
        {
            test: /\.css$/,
            use: ['style-loader', 'css-loader'],
        },
        {
            test: /\.(sa|sc|c)ss$/,
            use: [
                MiniCssExtractPlugin.loader,
                {
                    loader: 'css-loader',
                    options: {
                        sourceMap: devMode,
                    },
                },
                {
                    loader: 'sass-loader',
                    options: {
                        sourceMap: devMode,
                    },
                },
            ],
        },
        {
            test: /\.(png|jpg|gif|svg)$/,
            loader: 'file-loader?name=img/[name].[ext]',
        },
        {
            test: /\.(woff|woff2|eot|ttf)$/,
            loader: 'file-loader?name=fonts/[name].[ext]&publicPath=../',
        },
        ],
    },
    resolve: {
        extensions: ['*', '.js', '.jsx'],
    },
    devServer: {
        port: 3000,
        open: true,
    },
    plugins: [
        new CleanWebpackPlugin([outputDirectory]),
        new HtmlWebpackPlugin({
            template: './public/index.html',
            favicon: './public/favicon.ico',
        }),
        new MiniCssExtractPlugin({
            // Options similar to the same options in webpackOptions.output
            // both options are optional
            filename: devMode ? 'css/[name].css' : 'css/[name].[hash].css',
            chunkFilename: devMode ? 'css/[id].css' : 'css/[id].[hash].css',
        }),
    ],
};
