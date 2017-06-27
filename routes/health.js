(function () {
    'use strict';

    var express = require('express');
    var router = express.Router();
    var Promise = require("bluebird");

    var httpStatus = require('http-status-codes');

    router.get('/', (req, res) => {
        res.header('Cache-Control', 'no-store');
        res.header('Pragma', 'no-cache');
        healthResponse(req, res);
    });

    router.post('/', (req, res) => {
        res.header('Cache-Control', 'no-store');
        res.header('Pragma', 'no-cache');
        healthResponse(req, res);
    });

    // var healthResponse = function (req, res) {
    //     var responseObject = { "healthy": "UP", services:{status: '200'} };
    //             res.send(responseObject);
    //             return null;
    // };

    module.exports = router;
}());