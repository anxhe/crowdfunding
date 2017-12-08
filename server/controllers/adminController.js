const Cause = require('../models/Cause');
// const User = require('../models/User')
const paginate = require('express-paginate');


module.exports = {
  index: (req, res, next) => {
    Cause.find().limit(req.query.limit).skip(req.skip)
      .then(causes => {
        Cause.count().then(causesCount => {
          const pageCount = Math.ceil(causesCount/req.query.limit);
          res.json({
            causes: causes,
            pageCount: pageCount,
            itemCount: causesCount,
          });
        })
      .catch((err) => res.status(404).json(err));
    })
  }
}
