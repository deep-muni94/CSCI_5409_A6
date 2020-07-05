/**
 * AuthController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */

var JobpartsController = require('./JobpartsController');

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

		let email =req.query.uname
   		let password = req.query.psw
   		let jobname = req.query.hidTest;

   		sails.log(jobname,"-----jobname")

   		var s = await Auth.find().where({
   				and:
   					[
   					{emailid: email},
   					{password: password}
   				]
   			});

   		userid = s[0].id
   		sails.log(userid,"---userid")

   		let jobs;
		const request2 = require('request-promise');
		await request2('http://localhost:1337/fetchparts_api?jobs=' + jobname, 
			function (error, response, body) {
			jobs = JSON.parse(body);
			// sails.log(body,"------------")

		})

		sails.log(jobs,"------------jobs")

		jobs.forEach(async function(job) {
			
			const request = require('request-promise');
			sails.log(job.id,"-----id")
			await request('http://localhost:1339/getqtybyid17/' + job.id, 
				function (error, response, body) {

				if (parseInt(job.qoh) > parseInt(body)){
					res.send("parts not available")
				}
			})
		});


		var s1 = await Jobparts.find().where({
   				and:
   				[
   					{id: userid },
   					{jobName: jobname}
   				]
   			});

		sails.log(s1.length,"-------len")

		if(s1.length < 1){
			jobs.forEach(async function(job) {
				var today = new Date();
				const DATE_FORMATER = require( 'dateformat' );
				var time = DATE_FORMATER( today, "HH:MM:ss" );

				Jobparts.create({id: userid, partId: job.id , jobName: jobname, 
					qty: job.qoh, date:today , time: time, result:"sucess"}).exec(function(err){
					
					if(err){
						sails.log(err)
						res.json(err)
					}
					sails.log('vish')
					res.send("inserted..!")

					request.post('http://localhost:1337/postOrder').form({partid:[partid],jobname:req.body.jobname,
					 userid:req.body.userid, qty: [qty]
					 })

				})
			})
		}
		else{
			res.send("can not order more part for same job")
		}



   		
   	},

   	fetchjobs:async function(req, res) {

		const request = require('request');
		request('http://localhost:1338/requestAllJobs', function (error, response, body) {
			// sails.log(body)
			res.send(body); 
   	});
   },

   	fetchparts: async function(req, res) {

   		let jobname = req.query.jobs
   		let joblist;
   		const request1 = require('request-promise');
   		
   		await request1('http://localhost:1338/requestDataPartsQty/'+ jobname, function(err,httpResponse,body){
   			joblist = body 
   		 })

		joblist = JSON.parse(joblist);

		var data = [];

		var l = joblist.length
		var i = 0

		joblist.forEach(async function (arrayItem) {
		    let partid = arrayItem.id
		    sails.log(partid)
		    const request = require('request-promise');
			await request('http://localhost:1339/getpartbyid17/' + partid, function (error, response, body) {
				data.push(JSON.parse(body)[0]);
				sails.log(data)
				i=i+1

				if (i == l){
					res.view("\\pages\\orderparts",{parts:data})
					// res.json(data)
				}
			});	
   		});
	},

	fetchparts_api: async function(req, res) {

   		let jobname = req.query.jobs
   		let joblist;
   		const request1 = require('request-promise');
   		
   		await request1('http://localhost:1338/requestDataPartsQty/'+ jobname, function(err,httpResponse,body){
   			joblist = body 
   		 })

		joblist = JSON.parse(joblist);

		var data = [];

		var l = joblist.length
		var i = 0

		joblist.forEach(async function (arrayItem) {
		    let partid = arrayItem.id
		    sails.log(partid)
		    const request = require('request-promise');
			await request('http://localhost:1339/getpartbyid17/' + partid, function (error, response, body) {
				data.push(JSON.parse(body)[0]);
				sails.log(data)
				i=i+1

				if (i == l){
					// res.view("\\pages\\orderparts",{parts:data})
					res.json(data)
				}
			});	
   		});
	},



};

