const Cause = require('../models/Cause');
const User = require('../models/User');


module.exports = {
  edit: (req, res, next) => {
    User.find({ email: {$in: req.body.members }})
      .then(users => {
        Cause.findByIdAndUpdate(req.params.causeId,
          {$addToSet: { members: users.map(u => u._id)}},
          {multi:true})
         .then(result =>{
           res.status(200).json({result});
         })
      })
      .catch((err)=>{
        res.status(422).json({ message: err });
      });
  }
}
