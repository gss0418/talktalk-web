const baseConfig = require('./webpack.base.js')
const merge = require('webpack-merge')

const Webpack = require('webpack')

const devConfig = {
    mode:'development',
    devtool:'cheap-module-eval--source-map',
    devServer:{
        contentBase:'./dist',
        open:true,
        hot:true
    },
    //插件
    plugins:[
        new Webpack.HotModuleReplacementPlugin()
    ]
}

module.exports = merge(baseConfig,devConfig)