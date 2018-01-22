var path =require('path');
var webpack = require('webpack');

module.exports = {
    devServer: {
        inline: true,
       
        port: 8080
    },
    entry:'./app.js',
    output:{path:__dirname, filename: 'bundle.js'},


    module:{
        rules:[
            {
                test:/\.js$/,
                loader:'babel-loader',
                exclude:/node_modules/,
                query:{
                    presets:['es2015','react']
                }
            },
            {
                test: /\.css$/,
                exclude: /node_modules/,
                use: [
                    {
                        loader: 'style-loader',
                    },
                    {
                        loader: 'css-loader',
                        options: {
                            importLoaders: 1,
                        }
                    },
                    {
                        loader: 'postcss-loader'
                    }
                ]
            }
            // {
            //     test:/\.scss$/,
            //     use:[
            //         {loader:'style-loader'},
            //         {loader:'css-loader'},
            //         {loader:'postcss-loader'}
                   
            //     ]
            // }

        ]


    },




};