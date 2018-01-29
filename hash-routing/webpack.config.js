var path =require('path');
var webpack = require('webpack');

module.exports = {
    devServer: {
        inline: true,
       
        port: 8080
    },
    entry:'./container/app.js',
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
            }
          
          
        ]


    },




};