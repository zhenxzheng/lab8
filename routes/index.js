var projects = require('../projects.json');

/*
 * GET home page.
 */

exports.view = function(req, res){
//	var data = {'grid': false};
	projects['grid'] = false;
//	console.log(data);
  	res.render('index', projects);
},

exports.viewGrid = function(req,res){
	projects['grid'] = true;

  	res.render('index', projects);
};