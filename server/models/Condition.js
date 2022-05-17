const mongoose = require('mongoose');

const { Schema } = mongoose;

const conditionSchema = new Schema({
  name: {
    type: String,
    required: true,
    trim: true,
  },
});

const Condition = mongoose.model('Condition', conditionSchema);

module.exports = Condition;
