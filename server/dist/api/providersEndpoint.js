'use strict';

var express = require('express');
var router = express.Router();

/*
NOTE: This is a dummy endpoint for future functionality

POST /api/providers/scholarship-post

Server-side validation of new scholarship posts made by providers
and saving in Firebase

Input: 

Output: 
HTTP 200 OK: null
*/
router.post('/scholarship-post', function (req, res) {
  return res.send(200);
});

module.exports = router;
;

var _temp = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(router, 'router', 'server/src/api/providersEndpoint.js');
}();

;