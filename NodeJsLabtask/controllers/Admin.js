var express 	= require('express');

var router 		= express.Router();
//var userModel   = require.main.require('./models/user-model');



router.get('/', function(req, res){	

			res.render('Admin/index');
		
});

router.get('/AllEmployee', function(req, res){
	
			res.render('Admin/AllEmployee');
	
})


router.get('/AddEmployee', function(req, res){

	res.render('Admin/AddEmployee');
	
})











module.exports = router;

