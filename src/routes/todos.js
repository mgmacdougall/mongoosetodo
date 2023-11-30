const express = require('express');

let todoController = require('../controllers/todoController');

const router = express.Router();
router.get('/', async (req, res) => {
  try {
    let result = await todoController.getAllToDos();
    res.json(result);
  } catch (err) {
    res.send(err);
  }
});

// Query for one item in the database
router.get('/:queryId', async (req, res) => {
  const {queryId} = req.params;
  try {
    let result = await todoController.getToDoById(queryId);
    res.json(result);
  } catch (err) {
    res.send(err);
  }
});

// Update using the body
router.post('/', async (req, res) => {
  try {
    let result = await todoController.postTodo(req.body);
    res.json(result);
  } catch (error) {
    res.send({err: error.message});
  }
});

router.patch('/:id', async (req, res) => {
  const {id} = req.params;
  const {body} = req;
  console.log(body, id);
  try {
    let result = await todoController.updateOne(id, body);
    res.json(result);
  } catch (err) {
    res.send(err);
  }
});

module.exports = router;
