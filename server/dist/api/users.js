'use strict';

var express = require('express');
var router = express.Router();

router.post('/create', function (req, res) {
  return res.send(200);
});

module.exports = router;