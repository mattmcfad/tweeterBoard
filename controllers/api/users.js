var User = require ('../../models/user');
var router = require('express').Router();
var bcrypt = require('bcrypt');
var jwt = require('jwt-simple');
var secretKey = process.env.secretKey || require('../../key.coffee');

router.get('/', function(req, res, next) {
	console.log("GET: users");
	var token = req.headers['x-auth'];
	var auth = jwt.decode(token, secretKey);
	User.findOne({username: auth.username}, function(err, user){
		console.log("GET: users results:", user);
		res.json(user);
	});
});


router.post('/', function(req, res, next) {
	console.log("POST: users", req.body.username, req.body.password);
	var user = new User({username: req.body.username});
	bcrypt.hash(req.body.password, 10, function(err, hash) {
		user.password = hash;
		user.save(function(err, user) {
			if (err) {
				console.error("error bruh!!!");
			}
			res.sendStatus(201);
		});
	});
});


module.exports = router;
