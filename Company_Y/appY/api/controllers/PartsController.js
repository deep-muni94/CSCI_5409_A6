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
};

