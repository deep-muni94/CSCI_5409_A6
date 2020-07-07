/**
 * PartsController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */

module.exports = {
    getAllParts17: function (req, res) {
        Parts.find().exec(function (err, parts17) {
          if (err) {
            res.send({data:err})
        }else{
            res.send(parts17);
          }
        });
    },
    redirect17: function(req,res){
        res.redirect('parts17');
    },
    getPartById17: function (req, res) {
        sails.log(req.params.id,"--")
        Parts.find({id:req.params.id}).exec(function (err, parts17) {
            if (err) {
                res.send({data:err})
            }
            // if(parts17.length>0){
            res.json(parts17);
            // }
          //   else{
          //     res.send("No data associated with the partid")
          // }
        });
    },
    getQtyById17: function (req, res) {
        Parts.find({id:req.params.id}).exec(function (err, parts17) {
          if (err) {
            res.send({data:err})
        }else{
            res.send(""+parts17[0].qoh);
          }
        });
    },
    //functions for the front end
    displayAllParts17:function(req, res){
        Parts.find({}).exec(function(err,parts17){
            if(err){
                res.send(500, {data: err});
            }
            else{
                res.view('pages/parts', {parts17:parts17});
            }
        })
    },
    displayPartByIdPage17:function(req, res){
        Parts.find({id:null}).exec(function(err,parts17){
            if(err){
                res.send(500, {data: error});
            }
            else{
                res.view('pages/findpart', {parts17:parts17});
            }
        })
    },
    displayPartById17:function(req, res){
        Parts.find({id:req.body.id}).exec(function(err,parts17){
            if(err){
                res.send(500, {data: error});
            }
            else{
                res.view('pages/findpart', {parts17:parts17});
            }
        })
    },
    addPart17:function(req,res){
        partId17 = req.body.partId;
        partName17 = req.body.partName;
        qty17 = req.body.qty;
        Parts.find({id:partId17}).exec(function(err,parts17){
            if (parts17.length>0){
                errorMessage17 = "A record with part id "+partId17+" already exists.";
                res.view('pages/error', {errorMessage17:errorMessage17});
            }
            else{
                Parts.create({id:partId17, partName:partName17, qoh:qty17}).exec(function(err,parts17){
                    if(err){
                        res.send(500, {data: err});
                    }
                    else{
                        res.redirect('/parts17');
                    }
                });
            }
        });
    },
    updatePartPage17:function(req,res){
        Parts.findOne({id:req.params.partId, partName:req.params.partName}).exec(function(err,parts17){
            if(err){
                res.send(500, {data: err});
            }
            else{
                res.view('pages/updatepart', {parts17:parts17});
            }
        });
    },
    updateQuantity17:function(req,res){
        Parts.update({id:req.params.partId, partName:req.params.partName},{qoh:req.body.qty}).exec(function(err,parts17){
            if(err){
                res.send(500, {data: err});
            }
            else{
                res.redirect('/parts17');
            }
        });
    },
};

