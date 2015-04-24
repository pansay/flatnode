var express = require('express'),
    router = express.Router(),
    files = require('./../model/files'),
    texts = require('./../language/en'),
    config = require('./../config'),
    sprintf = require('sprintf-js').sprintf,
    data = {
        txt: texts
    };

var posts = files.listFiles(config.postsFolder);
console.log(posts);

module.exports = router

    .get('/', function (req, res) {
        res.render('index', data);
    })
