const request = require('request');

module.exports = {

  getAll17: function (req, res) {
    Jobs.find().exec(function (err, jobs17) {
      if (err) {
        console.log(err);
      }else{
      //   res.view('pages/allJobs', {result: jobs17});
       res.view('pages/allJobs', {result: jobs17});
      }
    });
  },

  getOne17: function (req, res) {
    Jobs.find({jobName: req.query.jobName, id: req.query.id}).exec(function (err, jobs17) {
      if(err){
        console.log(err);
      }else{
        // res.view("pages/oneJob", {result: jobs17});
       res.view("\\pages\\oneJob", {result: jobs17});
      }
    });
  },

  create17: function (req, res) {
    request('http://localhost:1338/partExist17/' + req.body.id, { json: true }, (err, response, body) => {
      if(err){
        return console.log(err);
      }

      if(response.body.status) {
        Jobs.find({jobName: req.body.jobName, id: req.body.id}).exec(function (err, job17) {
          if(job17.length === 0){
            Jobs.create({
              jobName: req.body.jobName,
              id: req.body.id,
              qty: req.body.qty
            }).exec(function (err, result) {
              // res.view("pages/addJob", {result: {msg: "Job Added", btnMsg: "Add another Job"}});
              res.view("\\pages\\addJob", {result: {msg: "Job Added", btnMsg: "Add another Job"}});
            });
          }else{
            // res.view("pages/addJob", {result: {msg: "Job already exist", btnMsg: "Try Again"}});
            res.view("\\pages\\addJob", {result: {msg: "Job already exist", btnMsg: "Try Again"}});
          }
        });
      }else if(!response.body.status){
        res.view("\\pages\\addJob", {result: {msg: "Part does not exist", btnMsg: "Try Again"}});
        //  res.view("pages/addJob", {result: {msg: "Part does not exist", btnMsg: "Try Again"}});
      }else{
        res.view("\\pages\\addJob", {result: {msg: "Server Error", btnMsg: "Try Again"}});
        //  res.view("pages/addJob", {result: {msg: "Part does not exist", btnMsg: "Try Again"}});
      }
    });
  },

  update17: function (req, res) {
    Jobs.find({jobName: req.body.jobName, id: req.body.id}).exec(function (err, job17) {
      if(job17.length === 1){
        Jobs.update({
          jobName: req.body.jobName,
          id: req.body.id,
        }).set({
          qty: req.body.qty
        }).exec(function (err, result) {
          // res.view("pages/update", {result: {msg: "Job Modified", btnMsg: "Modify another Job"}});
         res.view("\\pages\\update", {result: {msg: "Job Modified", btnMsg: "Modify another Job"}});
        });
      }else{
        // res.view("pages/update", {result: {msg: "Job does not exist", btnMsg: "Try Again"}});
       res.view("\\pages\\update", {result: {msg: "Job does not exist", btnMsg: "Try Again"}});
      }
    });
  },

  showDelete17: function (req, res) {
    Jobs.find().exec(function (err, jobs17) {
      if (err) {
        console.log(err);
      }else{
        // res.view('pages/deleteJobs', {result: jobs17});
       res.view('\\pages\\deleteJobs', {result: jobs17});
      }
    });
  },

  delete17: function (req, res) {
    Jobs.destroy({jobName: req.body.jobName, id: req.body.id}).exec(function (err, result) {
      res.redirect("/deleteJob");
    });
  },

  getRequiredQtyDetail17: function (req, res) {
    Jobs.find({jobName: req.query.jobName, id: req.query.id}).exec(function (err, jobs17) {
      if(err){
        console.log(err);
      }else{
        res.send(jobs17);
      }
    });
  },

  findAllJobs17: function (req, res) {
    Jobs.find().exec(function (err, jobs17) {
      if (err) {
        console.log(err);
      }else{
        res.send(jobs17);
      }
    });
  },

  findPartsQty17: function (req, res) {
    Jobs.find({jobName: req.params.id}).exec(function (err, jobs17) {
      if(err){
        console.log(err);
      }else{
        res.send(jobs17);
      }
    });
  }
};
