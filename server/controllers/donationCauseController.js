const Cause = require('../models/Cause');
const { Donation } = require('../models/Donation');

module.exports = {

  create: (req, res, next) => {
    let donationData = {
      amount: req.body.amount,
      isPrivate: req.body.isPrivate,
      _user: req.user
    };
    const newDonation = new Donation(donationData);
    newDonation.save()
      .then(newDonation => {
        Cause.findByIdAndUpdate(req.params.causeId,
          { $push: { donations: newDonation }},
          { new: true })
          .then(result => {
            res.status(201).json({ donation: newDonation });
          });
      })
      .catch((err) => {
        res.status(422).json({ message: err });
      });
  }
};
