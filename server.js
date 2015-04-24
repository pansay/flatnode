var express = require('express'),
    app = express(),
    texts = require('./language/en'),
    config = require('./config'),
    sprintf = require('sprintf-js').sprintf,
    swig = require('swig'),
    router = require('./controller/router.js');

app
    .engine('html', swig.renderFile)
    .set('view engine', 'html')
    .set('views', __dirname + '/view')
    .use('/scripts', express.static(__dirname + '/view/scripts'))
    .use('/', router)
    .listen(config.port, function() {
        console.log(sprintf(texts.start, config.port));
    });