const mongoose = require('mongoose');
const Schema   = mongoose.Schema;

const donationSchema = new Schema({
  amount: { type: Number, required: true, min: 1 },
  _cause: { type: Schema.Types.ObjectId, ref: 'Cause' },
  _user: { type: Schema.Types.ObjectId, ref: 'User' }
});

const Donation = mongoose.model('Donation', donationSchema);
module.exports = Cause;
