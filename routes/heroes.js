var express = require('express');
var router = express.Router();
const Heroes = require('../models').Hero


router.get('/', function(req, res, next) {
    res.render({ title: 'Express' });
  });





module.exports = router;
