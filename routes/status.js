(function () {
    'use strict';

    var express = require('express');
    var router = express.Router();

    var packageJson = require('../package.json');

    router.get('/', (req, res) => {
        res.header('Cache-Control', 'no-store');
        res.header('Pragma', 'no-cache');
        res.send({ "status": "UP", "name": "Billing Explanation Tool", "version": packageJson.version });
    });



    module.exports = router;
}());