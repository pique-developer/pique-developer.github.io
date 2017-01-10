const express = require('express')
const router = express.Router()

/*
NOTE: This is a dummy endpoint for future functionality

POST /api/users/create

Server-side logic to be performed after Firebase user creation

Input: 

Output: 
HTTP 200 OK: null
*/
router.post('/create', (req, res) => {
  return res.send(200)
})

module.exports = router