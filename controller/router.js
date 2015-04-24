var express = require('express'),
    router = express.Router(),
    texts = require('./../language/en'),
    config = require('./../config'),
    sprintf = require('sprintf-js').sprintf,
    data = {
        txt: texts
    };

module.exports = router

    .get('/', function (req, res) {
        res.render('index', data);
    })
