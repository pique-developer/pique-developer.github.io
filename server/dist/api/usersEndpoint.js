'use strict';

var express = require('express');
var router = express.Router();

/*
NOTE: This is a dummy endpoint for future functionality

POST /api/users/create

Server-side logic to be performed after Firebase user creation

Input: 

Output: 
HTTP 200 OK: null
*/
router.post('/create', function (req, res) {
  return res.send(200);
});

module.exports = router;
;

var _temp = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(router, 'router', 'server/src/api/usersEndpoint.js');
}();

;