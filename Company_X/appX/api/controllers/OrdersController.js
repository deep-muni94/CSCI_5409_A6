module.exports = {

  postOrder17: function (req, res) {
    Orders.find({id: req.body.id, jobName: req.body.jobName, userId: req.body.userId})
      .exec(function (err, order17) {
      if(err) {
        console.log(err);
      }else {
        if (order17.length === 0) {
          Orders.create({
            id: req.body.id,
            jobName: req.body.jobName,
            userId: req.body.userId,
            qty: req.body.qty
          }).exec(function (err, result) {
            if(err){
              console.log(err);
            }else{
              res.send({msg: "Order Added"});
            }
          });
        } else {
          res.send({msg: "Order already exist"});
        }
      }
    });
  },

  searchOrder17: function (req, res) {
    Orders.find({jobName: req.query.jobName})
      .exec(function (err, order17) {
        if(err){
          console.log(err);
        }else{
          if(order17.length > 0){
            res.send(order17)
          }else{
            res.send({msg: "Order does not exist"});
          }
        }
      });
  },
};

