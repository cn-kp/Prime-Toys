const mongoose = require('mongoose');
const dateFormat = require('../utils/formateDate');

const { Schema } = mongoose;

const toySchema = new Schema({
  name: {
    type: String,
    required: true,
    trim: true,
  },
  description: {
    type: String,
  },
  image: {
    type: String,
  },
  createdAt: {
    type: Date,
    default: Date.now(),
    get: (timestamp) => dateFormat(timestamp),
  },
  isFree: {
    type: Boolean,
    default: false,
  },
  category: {
    type: Schema.Types.ObjectId,
    ref: 'Category',
  },
  condition: {
    type: Schema.Types.ObjectId,
    ref: 'Condition',
  },
});

const Toys = mongoose.model('Toy', toySchema);

module.exports = Toys;
