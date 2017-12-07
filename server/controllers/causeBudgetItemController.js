const Cause = require('../models/Cause');
const Item = require('../models/Item');


module.exports = {

  create: (req, res, next) => {
    let itemData = {
      concept: req.body.concept,
      quantity: req.body.quantity,
      cost: req.body.cost
    }

    const newItem = new Item(itemData);
    newItem.save()
      .then(item => {
        Cause.findByIdAndUpdate(req.params.causeId ,{$addToSet: { budget: item._id }})
          .then(result =>{
            res.status(200).json({result});
          })
      })
      .catch((err)=>{
        res.status(422).json({ message: err });
      });
  }
}
