var User = require ('../../models/user');
var router = require('express').Router();
var bcrypt = require('bcrypt');
var jwt = require('jwt-simple');
var secretKey = process.env.secretKey || require('../../key.coffee');

router.post('/', function (req, res, next){
	console.log("POST: Session", req.body.username, req.body.password);
	User.findOne({username: req.body.username})
		.select('password')
		.exec(function(err, user) {
			if (err) {
				return next(err);
			}
			if (!user) {
				console.log("error: not a user");
				return res.send(401);
			}
			bcrypt.compare(req.body.password, user.password, function(err, valid){
				if (err) {
					return next(err);
				}
				if (!valid) {
					console.log("error: pw not valid");
					return res.send(401);
				}

				var token = jwt.encode({username: user.username}, secretKey);
				res.json(token);
			});
		});
});

module.exports = router;
