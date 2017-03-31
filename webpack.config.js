var path = require('path')
var webpack = require('webpack');
var ExtractTextPlugin = require("extract-text-webpack-plugin");
let context = path.resolve('.');

function isVendor(module) {
    var userRequest = module.userRequest;

    if (typeof userRequest !== 'string') {
        return false;
    }

    return userRequest.indexOf('node_modules') >= 0;
}

module.exports = {
    devtool: '#source-map',
    entry: {
        app: [ 'webpack-hot-middleware/client', './src/app.js'],
        //vendor : [not required unless specific entry point requirements come up, or have to generate separate vendor bundles for separate entries]
    },
    resolve:{
        extensions:['.js','.jsx'],
        //Alias are not forward compatible, corresponding consumers please remove your usage.
        alias: {
            molecules: path.resolve('.') + '/src/components/molecules',
            atoms: path.resolve('.') + '/src/components/atoms',
            organisms: path.resolve('.') + '/src/components/organisms',
            styles: path.resolve('.') + '/src/components/styles',
            mocks: path.resolve('.') + '/src/components/mocks',
            pages: path.resolve('.') + '/src/components/pages',
            api: path.resolve('.') + '/src/api',
            sagas: path.resolve('.') + '/src/sagas'
        }
    },
    output: {
        path:path.resolve(context,'build'),
        filename: '[name].bundle.js',
        publicPath: '/build/'
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                include: path.join(context, './src'),
                exclude: [path.resolve(context,'/node_modules/')],
                loader: ['babel-loader']
            },
            {
                test: /\.css?$/,
                exclude: [path.resolve(context,'/node_modules/')],
                include: path.join(context, './src'),
                loader:ExtractTextPlugin.extract({
                    fallBackLoader:"style-loader",
                    loader: ['css-loader?modules&importLoaders=1&localIdentName=[name]__[local]___[hash:base64:5]','postcss-loader'],
                })
            }
        ]
    },
    devServer:{
        hot: true,
        contentBase: path.resolve(context, 'build'),
        publicPath: '/'
    },
    plugins:[
        new webpack.HotModuleReplacementPlugin(),
        new webpack.NoErrorsPlugin(),
        new ExtractTextPlugin({filename:'[name].styles.css',disable:false,allChunks:true}),
        new webpack.optimize.CommonsChunkPlugin({
            name : 'vendor',
            minChunks: function(module) {
                return isVendor(module);
            }
        }),
        new webpack.optimize.CommonsChunkPlugin({
            name: 'common'
            //chunks:['entry1','entry2]
        })
    ]
}
