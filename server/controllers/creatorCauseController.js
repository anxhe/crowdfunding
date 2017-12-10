const Cause = require('../models/Cause');
const User = require('../models/User');
const { Item } = require('../models/Item');



module.exports = {
  index: (req, res, next) => {
    Cause.find({$or:[{_creator: req.user._id}, {members: req.user._id }]})
      .then(causes => res.status(200).json(causes))
      .catch(err => res.status(500).json(err));
  },
  show: (req, res, next) => {
    Cause.findOne({
      _id: req.params.causeId,
      $or:[{_creator: req.user._id}, {members: req.user._id }]}
    )
      .then(cause => res.status(200).json(cause))
      .catch(err => res.status(404).json(err));
  },
  createMembers: (req, res, next) => { //PENDDING==> middlewares CHECK-ACESS (Solo el creador puede añadir miembros a la causa)
    User.find({ email: {$in: req.body.members }})
      .then(users => {
        User.update({ _id: { $in: users.map(u => u._id)} }, { $set: { role: 'creatorcause' }}, {multi: true}).exec();
        Cause.findByIdAndUpdate(req.params.causeId,
          { $addToSet: { members: { $each: users } } }, { new: true } )
         .then(cause =>{
           res.status(200).json({cause});
         });
      })
      .catch((err) => {
        res.status(422).json({ message: err });
      });
  },
  createBudgetItem: (req, res, next) => {//PENDDING==> middlewares CHECK-ACESS (Solo el creador puede añadir miembros a la causa)
    let itemData = {
      concept: req.body.concept,
      quantity: req.body.quantity,
      cost: req.body.cost
    };

    const newItem = new Item(itemData);
    newItem.save()
      .then(item => {
        Cause.findByIdAndUpdate(req.params.causeId ,{$push: { budget: item }})
          .then(result =>{
            res.status(200).json({result});
          });
      })
      .catch((err)=>{
        res.status(422).json({ message: err });
      });
  }
};
