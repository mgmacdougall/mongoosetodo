const express = require('express');

const router = express.Router();

router.get('/', function(req, res) {
  res.json({name: 'admin'});
});

module.exports = router;
