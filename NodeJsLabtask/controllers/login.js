var express 	= require('express');
var router 		= express.Router();
//var userModel	= require.main.require('./models/user-model');

router.get('/', function(req, res){
	console.log('login page requested!');
	res.render('login/index');
});

router.post('/', function(req, res){
		
		var user ={
			username: req.body.uname,
			password: req.body.password
		};
		if (req.body.uname=='Admin') {
			res.render('Admin/index');
		}
		else if(req.body.uname=='Employee') {
			res.render('Employee/Index');
		}
		else
			res.render('login/index');

		
});

module.exports = router;

