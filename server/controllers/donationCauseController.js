const Cause = require('../models/Cause');
const Donation = require('../models/Donation');

module.exports = {

  create: (req, res, next) => {
    let donationData = {
      amount: req.body.amount,
      isPrivate: req.body.isPrivate
    }
    const newDonation = new Donation(donationData);
    newDonation.save()
      .then(newDonation => {
        Cause.findByIdAndUpdate(req.params.causeId, { $push: { donations: newDonation }})
          .then(result => {
            res.status(200).json({result});
          })
      })
      .catch((err) => {
        res.status(422).json({ message: err });
      });
  }
}
