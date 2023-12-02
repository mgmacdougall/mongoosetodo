const todoModel = require('../models/todoModel');

async function getAllToDos() {
  try {
    let result = await todoModel.find({});
    return result;
  } catch (error) {
    return error;
  }
}

async function postTodo(data) {
  let {title, desc, priority} = data;
  let message = new todoModel({
    title: title,
    desc: desc,
    priority: priority
  });

  try {
    let result = await message.save();
    let data = await result.toJSON();
    return data;
  } catch (error) {
    return {err: error.message};
  }
}

async function getToDoById(id) {
  try {
    let result = await todoModel.findById(id);
    return result;
  } catch (error) {
    return error;
  }
}

async function updateOne(id, body) {
  const {title, desc, priority} = body;
  console.log(title, desc, priority);
  try {
    let result = await todoModel.findByIdAndUpdate(
      id,
      {title: title, desc: desc, priority: priority},
      {new: true}
    );

    return result;
  } catch (error) {
    console.log(error);
    return error;
  }
}

async function findToDos(query) {
  try {
    let _title = query.title;
    let _query = {title: {$regex: _title, $options: 'i'}};
    let result = await todoModel.find(_query);
    return result;
  } catch (e) {
    console.log(e);
    return {message: e};
  }
}

async function deleteById(toDoId) {
  try {
    console.log(toDoId);
    let res = await todoModel.deleteOne({_id: toDoId});
    return {message: res};
  } catch (error) {
    return {err: error};
  }
}

module.exports = {
  postTodo,
  getAllToDos,
  getToDoById,
  updateOne,
  findToDos,
  deleteById
};
