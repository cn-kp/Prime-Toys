const mongoose = require('mongoose');

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
  category: {
    type: Schema.Types.ObjectId,
    ref: 'Category',
    required: true,
  },
});

const Toys = mongoose.model('Toys', toySchema);

module.exports = Toys;
