const Cause = require('../models/Cause');
// const User = require('../models/User')
// const paginate = require('express-paginate');


module.exports = {
  index: (req, res, next) => {
    console.log('entra')
    Cause.find()
      .then(causes => res.status(200).json(causes))
      .catch(err => res.status(422).json(err));
  }
}
