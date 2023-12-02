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

router.get('/search', async (req, res) => {
  const {title, limit} = req.query;

  try {
    let result = await todoController.findToDos({title});
    res.send(result);
  } catch (e) {
    console.log(e);
    res.json({message: e});
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

router.delete('/:id', async (req, res) => {
  console.log('here');
  const {id} = req.params;
  try {
    let result = todoController.deleteById(id);
    console.log(result);
    if (result) {
      res.json({message: 'success'});
    }
  } catch (error) {
    res.json({err: error});
  }
});

module.exports = router;
