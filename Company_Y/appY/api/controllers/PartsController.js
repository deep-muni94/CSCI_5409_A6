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
    getPartById17: function (req, res) {
        Parts.find({id:req.params.id}).exec(function (err, parts17) {
          if (err) {
            res.send({data:err})
        }else{
            res.send(parts17);
          }
        });
    },
    getQtyById17: function (req, res) {
        Parts.find({id:req.params.id}).exec(function (err, parts17) {
          if (err) {
            res.send({data:err})
        }else{
            console.log(parts17[0].qoh)
            res.send(""+parts17[0].qoh);
          }
        });
    },
    //functions for the front end
    displayAllParts17:function(req, res){
        Parts.find({}).exec(function(err,parts17){
            if(err){
                res.send(500, {data: error});
            }
            else{
                res.view('pages/parts', {parts17:parts17});
            }
        })
    },
    displayPartByIdPage17:function(req, res){
        Parts.find({id:null}).exec(function(err,parts17){
            console.log("search called")
            if(err){
                res.send(500, {data: error});
            }
            else{
                res.view('pages/findpart', {parts17:parts17});
                console.log(parts17)
            }
        })
    },
    displayPartById17:function(req, res){
        Parts.find({id:req.body.id}).exec(function(err,parts17){
            console.log("search called")
            if(err){
                res.send(500, {data: error});
            }
            else{
                res.view('pages/findpart', {parts17:parts17});
                console.log(parts17)
            }
        })
    },
    addPart17:function(req,res){
        partId17 = req.body.partId;
        partName17 = req.body.partName;
        qty17 = req.body.qty;
        Parts.find({id:partId17}).exec(function(err,parts17){
            console.log("Finding if part exists")
            if (parts17.length>0){
                console.log("Same part already exists. Exiting...")
                errorMessage17 = "A record with part id "+partId17+" already exists.";
                res.view('pages/error', {errorMessage17:errorMessage17});
            }
            else{
                // res.send("job doesnt exist")
                Parts.create({id:partId17, partName:partName17, qoh:qty17}).exec(function(err,parts17){
                    console.log("Add parts called")
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
};

