const express = require('express');

let createUser = require('../controllers/mainController');

const router = express.Router();

router.get('/', (req, res, next) => {
  res.send({name: 'mike'});
});

router.post('/api/add', async (req, res, next) => {
  let result = await createUser(req.body);
  if (result) {
    res.json(result);
  } else {
    res.send({err: result});
  }
});

module.exports = router;
