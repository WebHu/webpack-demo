//webpack的配置文件-开发版本
//plugin需要引入后再使用
var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');
module.exports = {
    devtool: 'eval-source-map',//生成Source Maps（使调试更容易）
    entry: __dirname + "/app/main.js",//已多次提及的唯一入口文件
    output: {
        path: __dirname + "/build",//打包后的文件存放的地方
        filename: "bundle.js"//打包后输出文件的文件名
    },
    devServer: {
        contentBase: "./build",//本地服务器所加载的页面所在的目录
        historyApiFallback: true,//不跳转
        inline: true//实时刷新
    },
    module: {
        rules: [
            {
                test: /(\.jsx|\.js)$/,
                use: {
                    loader: "babel-loader",
                    // options: {
                    //     presets: [
                    //         "es2015", "react"//安装了babel 以及babel要解析的几个模块，es2015 解析es6，react解析react的jsx
                    //     ]
                    // }
                },
                exclude: /node_modules/
            },
            {
                test: /\.css$/,  //webpack提供两个工具处理样式表，css-loader 和 style-loader,二者组合在一起使你能够把样式表嵌入webpack打包后的JS文件中。
                use: [
                    {
                        loader: "style-loader" //style-loader将所有的计算后的样式加入页面中
                    }, {
                        loader: "css-loader",//css-loader使你能够使用类似@import 和 url(...)的方法实现 require()的功能
                        options: {
                            modules: true // CSS modules 通过CSS模块，所有的类名，动画名默认都只作用于当前模块
                        }
                    },{
                        loader: "postcss-loader"
                    }
                ]
            }

        ]
    },
    plugins: [
       // new webpack.BannerPlugin("版权所有，翻版必究");
        new webpack.BannerPlugin('版权所有，翻版必究'),
        new HtmlWebpackPlugin({
            template: __dirname + "/app/index.tmpl.html"//new 一个这个插件的实例，并传入相关的参数  自动生成index.html并引入js、css等
        }),
        new webpack.HotModuleReplacementPlugin()//热加载插件
    ]
}