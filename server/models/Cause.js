const mongoose = require('mongoose');
const Schema   = mongoose.Schema;
const moment = require('moment');
const {itemSchema} = require('./Item');
const {donationSchema} = require('./Donation');
const User = require('./User');

const causeSchema = new Schema({
  name: { type: String, required: true },
  objectives: [{ type: String, required: true }],
  videourl: { type: String, required: true },
  description: { type: String, required: true },
  files: [String],
  deadline: { type: Date, required: true },
  budget: [itemSchema],
  isValidate: { default: false},
  status: {
    type: String,
    enum: [
      'approved',
      'rejected',
      'pending'
    ],
    default: 'pending'
  },
  _creator: { type: Schema.Types.ObjectId, ref: 'User', required: true },
  members: [
    { type: mongoose.Schema.Types.ObjectId, ref: 'User' }
  ],
  updates:[
    { type: String }
  ],
  donations: [donationSchema]
},{
  timestamps: {
    createdAt: 'created_at',
    updatedAt: 'updated_at'
  },
  toJSON: {
    virtuals: true
  }
});

causeSchema.post('save', (cause) => {
  User.findByIdAndUpdate(cause._creator , { $set: { role: 'creatorcause' }}).exec();
});

causeSchema.virtual('timeRemaining').get(function () {
  return moment(this.deadline).fromNow(true);
});

causeSchema.virtual('totalBudget').get(function () {
  let total = 0;
  this.budget.map((item) => total += item.quantity * item.cost);
  return total;
});

causeSchema.virtual('totalDonation').get(function () {
  let total = 0;
  this.donations.map((d) => total += d.amount);
  return total;
});

causeSchema.virtual('percentageDonation').get(function () {
  return Math.round((this.totalDonation / this.totalBudget * 100)) || 0;
});

const Cause = mongoose.model('Cause', causeSchema);
module.exports = Cause;
