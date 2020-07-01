/**
 * AuthController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */

module.exports = {
  
	signup:async function(req, res) {

		let name = req.body.name
    	let email = req.body.email
   		let password = req.body.password

   		sails.log(name)
		Auth.create({id: 1, name: name, emailid: email, password: password}).exec(function(err){
			if(err){
				sails.log(err)
				res.json(err)
			}
			sails.log('vish')
			res.redirect("/homepage")
		})
			
	},

	login:async function(req, res) {

		let email = req.body.email
   		let password = req.body.password

   		var s = await Auth.find().where({
   				and:
   				[
   					{emailid: email},
   					{password: password}
   				]
   			});

   		sails.log()
   		if (s.length > 0){
   			res.json({"userid":s[0].id})
   		}
   		else{
   			res.send("false")
   		}
   	},

   	fetchjobs:async function(req, res) {

		const request = require('request');
		request('http://localhost:1337/requestAllJobs', function (error, response, body) {
			res.send(body); 
   	});
   },

   fetchqty:async function(req, res) {

   		let partid = req.body.partid

   		sails.log(partid)
   		sails.log("abc"+partid)
		const request = require('request');
		request('http://localhost:1337/getqtybyid17/' + partid, function (error, response, body) {
			res.send(body); 
   	});
	},

	


};

