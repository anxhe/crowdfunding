const mongoose = require('mongoose');
const Schema   = mongoose.Schema;

const itemSchema = new Schema({
  concept: { type: String, required: true },
  quantity: { type: Number, required: true, min: 0 },
  cost: { type: Number, required: true, min: 0 }
});

const Item = mongoose.model('Item', itemSchema);
module.exports = Item;
