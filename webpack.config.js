var path = require('path')
var webpack = require('webpack');
var environ = require('./env.config');
var ExtractTextPlugin = require("extract-text-webpack-plugin");

var JPlugins = {
  HMRE    : new webpack.HotModuleReplacementPlugin(),
  NOERR   : new webpack.NoErrorsPlugin(),
  EXTTEXT : new ExtractTextPlugin({filename:'styles.css',disable:false,allChunks:true})
};


/**
  Battle about Environment here.
**/
if(process.argv[2]){
  var env = process.argv[2].split('=')[1];
  if(env in environ.ENV){
    environ.ENV[env] = true;
  }else {
    console.error('=>>>>> ..... Specified ENV does not exist, falling back to default mode DEV!!!!!');
  }
}else{
  environ.ENV.DEV = true;
}

module.exports = {
  entry: [
    'webpack-hot-middleware/client',
    './index.js'
  ],
  output: {
    path:path.resolve(__dirname,'dist'),
    filename: 'app.bundle.js',
    publicPath: '/static/'
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        include: [path.resolve(__dirname,'/')],
        exclude: [path.resolve(__dirname,'/node_modules/')],
        loaders: [ 'babel-loader' ]
      },
      {
        test: /\.css?$/,
        exclude: [path.resolve(__dirname,'/node_modules/')],
        loader: ExtractTextPlugin.extract({loader:['css-loader?modules&importLoaders=1&localIdentName=[name]__[local]___[hash:base64:5]']}),
        include: __dirname
      }
    ]
  },
  devtool:"inline-source-map",
  devServer:{
    hot: true,
    contentBase: path.resolve(__dirname, 'dist'),
    publicPath: '/'
  },
  plugins: environ.ENV['PROD'] ? [
    new webpack.optimize.OccurrenceOrderPlugin(),
    JPlugins.HMRE,
    JPlugins.NOERR,
    new webpack.optimize.UglifyJsPlugin({
      compress: { warnings: true }
    }),
    JPlugins.EXTTEXT
  ] : [
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
