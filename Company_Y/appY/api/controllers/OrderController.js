module.exports = {
  insertOrder17: function (req, res) {
    console.log("called")
    Orders.find({id: req.body.id, jobName: req.body.jobName, userId: req.body.userId})
      .exec(function (err, order17) {
        if (err) {
          console.log(err);
        } else {
          if (order17.length === 0) {
            Orders.create({
              id: req.body.id,
              jobName: req.body.jobName,
              userId: req.body.userId,
              qty: req.body.qty
            }).exec(function (err, result) {
              if (err) {
                console.log(err);
              } else {
                res.send({msg: "Order Added"});
                handler17(req, res);
              }
            });
          } else {
            res.send({msg: "Order already exist"});
            console.log(order17[0].id)
          }
        }
      });
  },
  searchOrder17: function (req, res) {
    Orders.find({jobName: req.body.jobName}).sort([
      {jobName: 'ASC'},
      {userId: 'ASC'},
      {id: 'ASC'},
    ]).exec(function (err, order17) {
      if (err) {
        console.log(err);
      } else {
        res.view('pages/searchResult', {result: order17});
      }
    });
  },
  displayAllOrder17: function (req, res) {
    Orders.find({}).exec(function (err, orders17) {
      if (err) {
        res.send(500, {data: err});
      } else {
        res.view('pages/order', {orders17: orders17});
      }
    })
  },
};

var handler17 = function (req, res) {
  var find17 = req.body.id;
  console.log(find17);
  Orders.findOne({id: find17}).exec((function (err, result) {
    console.log(result);
    if (err) {
      console.log("in err" + err);
    } else {
      if (result) {
        Parts.findOne({id: req.body.id}).exec((function (err, result1) {
          if (err) {
            console.log("error " + err);
          } else {
            var change17 = result1.qoh - result.qty;
            Parts.update({id: find17}, {qoh: change17}).exec(function (err, response) {
              if (err) {
                res.send(500, {"Error": err});
              } else {
                res.send(response);
              }
            });
          }
        }));
      }
    }
  }));
}
