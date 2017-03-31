var path                    = require('path');
var express                 = require('express');
var webpack                 = require('webpack');
var webpackConfig           = null;
var webpackDevMiddleware    = require('webpack-dev-middleware');
var webpackHotMiddleware    = require('webpack-hot-middleware');

var proxy = require('express-http-proxy');
var app         = express();
var router      = express.Router();
var __PROD__    = null;
var __DEV__     = null;
var __QA__      = null;

/**
 * Environment discussions starts *
 **/
var commandArgs = process.argv.splice(2,process.argv.length-1);

for(var i = 0;i < commandArgs.length;i++){
    if(commandArgs[i].split('=')[0].indexOf('ENV') != -1){
        console.log(commandArgs[i].split('=')[1]);
        __DEV__     = commandArgs[i].split('=')[1] === 'DEV';
        __PROD__    = commandArgs[i].split('=')[1] === 'PROD';
        __QA__      = commandArgs[i].split('=')[1] === 'QA';
    };
}

if(__PROD__)        {   webpackConfig = require('./Webpack/webp.prodconfig');
    console.error('=>>>>> ..... Preparing a PROD build !!!!!');
}
else if(__QA__)     {}
else if(__DEV__)    {   webpackConfig = require('./Webpack/webp.prodconfig');}
else                {   webpackConfig = require('./Webpack/webp.devconfig');
    console.error('=>>>>> ..... Specified ENV does not exist, falling back to default mode DEV!!!!!');
}

/*** Environment ***/

var webpackCompiler = webpack(webpackConfig);

router.get('/', function (req, res) {
    res.sendFile(path.join(__dirname, 'index.html'));
});

app.use(router);

app.use(webpackDevMiddleware(webpackCompiler, {
    publicPath: webpackConfig.output.publicPath,
    noInfo: true,
    stats: {
        colors: true
    }
}));
app.use(webpackHotMiddleware(webpackCompiler, {
    log: console.log
}));




app.listen(6556, function (err) {
    if (err) {
        return console.error(err);
    }

    console.log('Listening at http://localhost:6556/');
});
