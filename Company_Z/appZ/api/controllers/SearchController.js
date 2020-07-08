/**
 * SearchController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */

module.exports = {
  
    showSearch: function (req, res) {
		Search.find({}).exec(function (err, search17) {
		  if (err) {
			res.send(500, { data: err });
		  }
		  else {
        //    res.view('\\pages\\showSearch', { search17: search17 });
			res.view('pages/showSearch', { search17: search17 });
		  }
		})
	  },
};

