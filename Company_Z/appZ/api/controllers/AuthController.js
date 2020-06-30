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

   		if (s.length > 0){
   			res.send("success")
   		}
   		else{
   			res.send("false")
   		}
   	}

};

