const Cause = require('../models/Cause');
const Item = require('../models/Item');
// const User = require('../models/User.js');
const paginate = require('express-paginate');


module.exports = {
  index: (req, res, next) => {
    Cause.find({status: 'approved'}).limit(req.query.limit).skip(req.skip)
      .then(causes => {
        Cause.count().then(causesCount => {
          const pageCount = Math.ceil(causesCount/req.query.limit);
          res.json({
            causes: causes,
            pageCount: pageCount,
            itemCount: causesCount,
          });
        })
      .catch((err) => res.status(500).json(err));
    })
  },
  show: (req, res, next) => {
    Cause.findById(req.params.id)
      .then(cause => {
        res.status(200).json({
          cause: cause,
        })
      })
      .catch((err) => res.status(404).json(err));
  },
  create: (req, res, next) => {

    let causeData = {
      _creator: req.user._id,
      name: req.body.name,
      objectives: req.body.objectives,
      videourl: req.body.videourl,
      description: req.body.description,
      // files: req.files.map((e)=> {
      //   return e.path.substring(6,e.path.length);
      // }),
      deadline: Date(req.body.deadline),
      members: req.body.members,
    }
    const newCause = new Cause(causeData);

    newCause.save()
      .then(cause => res.status(201).json({cause})) // created
      .catch((err) => res.status(422).json(err));   // unprocessable entity
  }

}
