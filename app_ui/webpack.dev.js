//webpack.js.org/guides/hmr-react/

const path = require('path');
const webpack = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

const config = {
    context: path.resolve(__dirname, 'src'),

    entry: [
        'babel-polyfill',
        'react-hot-loader/patch',
        'webpack-dev-server/client?http://0.0.0.0:8080',
        'webpack/hot/only-dev-server',
        './index.jsx'
    ],
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js',

        pathinfo: true,
        publicPath: '/dist/js/',
        sourceMapFilename: '[name].map'
    },
    resolve: {
        extensions: ['.js', '.jsx', '.css']
    },

    devtool: 'eval-source-map',

    devServer: {
        host: '0.0.0.0',
        hot: true,
        compress: true,
        port: 8080,
        contentBase: path.resolve(__dirname, 'dist'),
        publicPath: '/dist/js/',
        historyApiFallback: true,

        proxy: {
            "/api": 'http://0.0.0.0:5000'
        }
    },
    module: {
        rules: [
            {
                test: /\.jsx?/,
                exclude: /node_modules/,
                use: ['babel-loader']
            },
            {
                test: /\.css$/,
                loader: 'style-loader'
              }, {
                test: /\.css$/,
                loader: 'css-loader',
                query: {
                  modules: true,
                  localIdentName: '[name]__[local]___[hash:base64:5]'
                }
              }
        ]
    },

    plugins: [
        new webpack.HotModuleReplacementPlugin(),
        new webpack.NamedModulesPlugin(),
        new ExtractTextPlugin('styles.css')
    ],
    watch: true,
    watchOptions: {
        ignored: /node_modules/
    }
};

module.exports = config;