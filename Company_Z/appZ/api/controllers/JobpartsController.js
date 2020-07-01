/**
 * JobpartsController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */

module.exports = {
  
	submitdata:async function(req, res) {

		
		let qty = req.body.qty;
		let partid = req.body.partid;

		sails.log(partid)
		let available_qty;
		const request = require('request-promise');
		await request('http://localhost:1337/getqtybyid17/' + partid, 
			function (error, response, body) {
			available_qty = body;
			sails.log(response)
			sails.log(body,"------------")

		})
 		
		if (qty < available_qty){ 
			var today = new Date();
			const DATE_FORMATER = require( 'dateformat' );
			var time = DATE_FORMATER( today, "HH:MM:ss" );

			Jobparts.create({id: req.body.userid, partId: req.body.partid , jobName: req.body.jobname, 
				qty: req.body.qty, date:today , time: time, result:"sucess"}).exec(function(err){
				if(err){
					sails.log(err)
					res.json(err)
				}
				sails.log('vish')
				res.send("inserted..!")
			})
		}
		else{
			res.send("qty should be less")
		}		
	},
};

