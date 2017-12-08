const mongoose = require('mongoose');
const Schema   = mongoose.Schema;

const donationSchema = new Schema({
  amount: { type: Number, required: true, min: 1 },
  _user: { type: Schema.Types.ObjectId, ref: 'User' },
  isPrivate: { type: Boolean , default: true}
});

const Donation = mongoose.model('Donation', donationSchema);
module.exports = Donation;
