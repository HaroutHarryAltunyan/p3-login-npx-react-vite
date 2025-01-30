const { Schema, model } = require('mongoose');

const toDoSchema = new Schema({
  task: {
    type: String,
    required: true,
    minlength: 1,
    maxlength: 280,
    trim: true,
  },
  completed: {
    type: Boolean,
    default: false, // Tasks start as incomplete
  },
});

const ToDo = model('ToDo', toDoSchema);

module.exports = ToDo;