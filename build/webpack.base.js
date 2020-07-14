const path = require('path')
const VueLoaderPlugin = require('vue-loader/lib/plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')

module.exports = {
    entry: './src/main.js',
    devtool: 'cheap-module-eval--source-map',
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, '../dist')
    },
    module: {
        rules: [{
            test: /\.vue$/,
            loader: 'vue-loader'
        },
        {
            test: /\.(jpg|jpeg|png|svg)$/,
            loader: 'url-loader',
            options: {
                name: '[name].[ext]',
                limit: 2048
            }
        }, {
            test: /\.css$/,
            use: ['style-loader', 'css-loader']
        },
        {
            test: /\.styl(us)?$/,
            use: ['vue-style-loader', 'css-loader', 'postcss-loader', 'stylus-loader']
        }, {
            test: /\.js$/,
            exclude: /node_modules/,
            loader: 'babel-loader'
        }, {
            test: /\.scss$/,
            use: ['style-loader', 'css-loader', 'sass-loader']
        }
        ]
    },
    //插件
    plugins: [
        new VueLoaderPlugin(),
        new HtmlWebpackPlugin({
            template: './index.html'
        }),
        new CleanWebpackPlugin(),
    ],
    resolve: {
        alias: {
            'vue': 'vue/dist/vue.js'
        }
    }
}