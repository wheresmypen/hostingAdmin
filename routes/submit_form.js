var express = require('express');
var router = express.Router();
var mongo= require('mongo');

/* GET home page. */
router.get('/', function(req, res, next) {


	mongo.show(model, function(err, data) {
		if (err) {
			console.error(err);
			res.status(500).json({error: err, message: err.message, stack: err.stack});
		}
		res.render({employees: data});
	});

});



module.exports = router;
