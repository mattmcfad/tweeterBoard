var User = require ('../../models/user');
var router = require('express').Router();
var bcrypt = require('bcrypt');

router.get('/', function(req, res, next) {
	var token = req.headers['x-auth'];
	var auth = jwt.decode(token, secretKey);
	User.findOne({username: auth.username}, function(err, user){
		res.json(user);
	});
});


router.post('/', function(req, res, next) {
	var user = new User({username: req.body.username});
	bcrypt.hash(req.body.password, 10, function(err, hash) {
		user.password = hash;
		user.save(function(err, user) {
			if (err) {
				throw next(err);
			}
			res.send(201);
		});
	});
});


module.exports = router;
