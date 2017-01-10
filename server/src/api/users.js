const express = require('express')
const router = express.Router()

router.post('/create', (req, res) => {
  return res.send(200)
})

module.exports = router