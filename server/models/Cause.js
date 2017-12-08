const mongoose = require('mongoose');
const Schema   = mongoose.Schema;
const moment = require('moment');

const causeSchema = new Schema({
  name: { type: String, required: true },
  objectives: [{ type: String, required: true }],
  videourl: { type: String, required: true },
  description: { type: String, required: true },
  files: [String],
  deadline: { type: Date, required: true },
  budget: [
    { type: mongoose.Schema.Types.ObjectId, ref: 'Item' }
  ],
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
  donations: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Donation' }]
},{
  timestamps: {
    createdAt: 'created_at',
    updatedAt: 'updated_at'
  },
  toJSON: {
    virtuals: true
  }
});

causeSchema.virtual('timeRemaining').get(function () {
  let remaining = moment(this.deadline).fromNow(true).split(' ');
  let [days, unit] = remaining;
  return { days, unit };
});

causeSchema.virtual('inputFormattedDate').get(function(){
  return moment(this.deadline).format('MMMM Do YYYY, h:mm:ss a');
});

const Cause = mongoose.model('Cause', causeSchema);
module.exports = Cause;
