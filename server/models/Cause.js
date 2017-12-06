const mongoose = require('mongoose');
const Schema   = mongoose.Schema;

const causeSchema = new Schema({
  name: { type: String, required: true },
  objectives: [{ type: String, required: true }],
  videourl: { type: String, required: true },
  description: { type: String, required: true },
  deadline: { type: Date, required: true },
  budget: [
    { type: mongoose.Schema.Types.ObjectId, ref: 'Item' }
  ],
  status: {
    type: String,
    enum: [
      'approved',
      'rejected'
    ]
  },
  members: [
    { type: mongoose.Schema.Types.ObjectId, ref: 'User' }
  ],
  updates:[
    { type: String }
  ]
}, {
  timestamps: {
    createdAt: 'created_at',
    updatedAt: 'updated_at'
  }
});

causeSchema.virtual('timeRemaining').get(function () {
  let remaining = moment(this.deadline).fromNow(true).split(' ');
  let [days, unit] = remaining;
  return { days, unit };
});

causeSchema.virtual('inputFormattedDate').get(function(){
  return moment(this.deadline).format('YYYY-MM-DD');
});

const Cause = mongoose.model('Cause', causeSchema);
module.exports = Cause;
