/**
 * JobpartsController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */

module.exports = {

	submitdata:async function(req, res) {

		let jobname = req.body.hidTest;

		let jobs;
		const request2 = require('request-promise');
		await request2('http://localhost:1338/getparts?jobs=' + jobname,
			function (error, response, body) {
			jobs = body;
			sails.log(response)
			sails.log(body,"------------")

		})

		sails.log(partid)
		let available_qty;
		const request = require('request-promise');
		await request('http://localhost:1338/getqtybyid17/' + partid,
			function (error, response, body) {
			available_qty = body;
			sails.log(response)
			sails.log(body,"------------")

		})

		var s = await Jobparts.find().where({
   				and:
   				[
   					{partId: partid},
   					{jobName: jobname}
   				]
   			});

		sails.log(s.length,"-------")

 		if(s.length < 1){
			if (qty < available_qty){
				var today = new Date();
				const DATE_FORMATER = require( 'dateformat' );
				var time = DATE_FORMATER( today, "HH:MM:ss" );

				Jobparts.create({id: userid, partId: req.body.partid , jobName: req.body.jobname,
					qty: req.body.qty, date:today , time: time, result:"sucess"}).exec(function(err){
					if(err){
						sails.log(err)
						res.json(err)
					}
					sails.log('vish')
					res.send("inserted..!")

					request.post('http://localhost:1337/postOrder').form({partid:partid,jobname:req.body.jobname,
					 userid:req.body.userid, qty: qty
					 })

				})
			}
			else{
				res.send("qty should be less")
			}
		}
		else{
			res.send("can not order more part for same job")
		}
	},
};

