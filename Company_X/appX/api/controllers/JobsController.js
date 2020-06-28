/**
 * JobsController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */




module.exports = {
  getAll17:function(req,res){
       Jobs.find().exec(function(err,jobs17){
            if(err){
                console.log(err);
                res.send(5000,{err});
            }
            console.log(jobs17);
           res.send(jobs17);
         //   res.view('viewdata',{jobs17:jobs17});
       });
  },
  getOne17:function(req,res){
    if(!req.param('jobName') || !req.param('id')){
      res.send('name of the jobs and id required.')
    }else{
      let jobName17=req.param('jobName');
      let id17=req.param('id');
      Jobs.find({jobName:req.param('jobName'),id:req.param('id')}).exec(function(err,jobs17){
        if(err){
            console.log(err);
            res.send(5000,{err});
        }
        if(jobs17==""){
            res.send('job with jobName '+jobName17+' and id '+id17+' was not found.');
        }else{
        res.view('viewone',{jobs17});
        }
    });}
  },
  create17:function(req,res){
    if(!req.param('jobName') || !req.param('id')){
      res.send('name of the jobs, id and quentity required.')
    }else{
      var j17;
      let jobName17=req.param('jobName');
      let id17=req.param('id');
      let qty17=req.param('qty');
      Jobs.find({jobName:req.param('jobName'),id:req.param('id')}).exec(function(err,jobs17){
        if(err){
            console.log(err);
            res.send(5000,{err});
        }
        if(jobs17==""){
            Jobs.create({jobName:req.param('jobName'),id:req.param('id'),qty:req.param('qty')}).exec(function(err,jobs17){
                if(err){
                    console.log(err);
                    res.send(5000,{err});
                }
            //    res.send('job with jobName '+jobName17+' and id '+id17+' and qty '+qty17+' was created successfully.');
                res.redirect('/jobs17');
           });
        }else{
            res.send('job with jobName '+jobName17+' and id '+id17+' already exists.');
        }
        });}
  },
  updatejob17:function(req,res){
    let jobName17=req.param('jobName');
    let id17=req.param('id');
    let qty17=req.param('qty');
    res.view('updatedata',{jobName:jobName17,id:id17,qty:qty17});
  }
  ,
  update17:function(req,res){
    if(!req.param('jobName') || !req.param('id')){
      res.send('name of the jobs, id and quentity required.')
    }else{
    let jobName17=req.param('jobName');
    let id17=req.param('id');
    let qty17=req.param('qty');
    Jobs.find({jobName:req.param('jobName'),id:req.param('id')}).exec(function(err,jobs17){
      if(err){
          console.log(err);
          res.send(5000,{err});
      }
      if(jobs17==""){
        res.send('job with jobName '+jobName17+' and id '+id17+' does not exit.');  
      }else{
        Jobs.update({jobName:req.param('jobName'),id:req.param('id')}).set({jobName:req.param('jobName'),id:req.param('id'),qty:req.param('qty')}).exec(function(err,jobs17){
            if(err){
                console.log(err);
                res.send(err);
            }
          //  res.send('job with jobName '+jobName17+' and id '+id17+' and qty '+qty17+' was updated successfully.');
          res.redirect('/jobs17');
       });
      }
      });}
    },
    delete17:function(req,res){
        var j17;
        let jobName17=req.param('jobName');
        let id17=req.param('id');
        let qty17=req.param('qty');
        Jobs.find({jobName:req.param('jobName'),id:req.param('id')}).exec(function(err,jobs17){
          if(err){
              console.log(err);
              res.send(5000,{err});
          }
          if(jobs17==""){
            res.send('job with jobName '+jobName17+' and id '+id17+' does not exit.');  
          }else{
            Jobs.destroy({jobName:req.param('jobName'),id:req.param('id')}).exec(function(err,jobs17){
                if(err){
                    console.log(err);
                    res.send(err);
                }
            //    res.send('job with jobName '+jobName17+' and id '+id17+' and qty '+qty17+' was deleted successfully.');
            res.redirect('/jobs17');
           });
          }
          });
        }
};

