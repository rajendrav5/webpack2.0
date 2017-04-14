var path = require('path')
var webpack = require('webpack');
var environ = require('../env.config');
var ExtractTextPlugin = require("extract-text-webpack-plugin");

var JPlugins = {
    HMRE    : new webpack.HotModuleReplacementPlugin(),
    NOERR   : new webpack.NoErrorsPlugin(),
    EXTTEXT : new ExtractTextPlugin({filename:'styles.css',disable:false,allChunks:true})
};

module.exports = {
    devtool:"inline-source-map",
    context: path.resolve(__dirname,'..'),
    entry: {
        app: [ 'webpack-hot-middleware/client', './index.js'],
        vendor : ['webpack-hot-middleware/client','react']
    },
    output: {
        path:path.resolve(__dirname,'../dist'),
        filename: '[name].bundle.js',
        publicPath: '/static/'
    },
    module: {
        loaders: [
            {
                test: /\.js$/,
                include: [path.resolve(__dirname,'../')],
                exclude: [path.resolve(__dirname,'../node_modules/')],
                loaders: [ 'babel-loader' ]
            },
            {
                test: /\.css?$/,
                exclude: [path.resolve(__dirname,'/node_modules/')],
                include: path.join(__dirname, '../'),
                loader:ExtractTextPlugin.extract({
                    fallBackLoader:"style-loader",
                    loader: ['css-loader?modules&importLoaders=1&localIdentName=[name]','postcss-loader'],
                })
            }
        ]
    },

    devServer:{
        hot: true,
        contentBase: path.resolve(__dirname, '../dist'),
        publicPath: '/'
    },
    plugins:[
        new webpack.optimize.OccurrenceOrderPlugin(),
        JPlugins.HMRE,
        JPlugins.NOERR,
        JPlugins.EXTTEXT,
        function() {
            this.plugin("done", function(stats) {
                require("fs").writeFileSync(
                    path.join(__dirname, "", "stats.json"),
                    JSON.stringify(stats.toJson()));
                //console.log(JSON.stringify(stats.toJson()));
            });
        }
    ]
}
