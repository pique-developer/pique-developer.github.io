const express = require('express')
const router = express.Router()

/*
NOTE: This is a dummy endpoint for future functionality

POST /api/providers/scholarship-post

Server-side validation of new scholarship posts made by providers
and saving in Firebase

Input: 

Output: 
HTTP 200 OK: null
*/
router.post('/scholarship-post', (req, res) => {
  return res.send(200)
})

module.exports = router