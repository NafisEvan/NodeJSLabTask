var express 	= require('express');

var router 		= express.Router();
//var userModel   = require.main.require('./models/user-model');



router.get('/', function(req, res){	

			res.render('Employee/index');
		
});
router.get('/MyProfile', function(req, res){	

			res.render('Employee/profile');
		
});
router.get('/UpdateProfile', function(req, res){	

			res.render('Employee/update');
		
});



module.exports = router;

