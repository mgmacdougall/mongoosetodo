let mongoose = require('mongoose');

let todoSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true
  },
  desc: String,
  priority: {type: Number, default: 0}
});

module.exports = mongoose.model('ToDo', todoSchema);
