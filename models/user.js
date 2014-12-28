var db = require('../db');

var User = db.Schema({
	username: 	{ type: String, required: true },
	password: 	{ type: String, required: true },
	date: 		{ type: Date, required: true, default: Date.now }
});

module.exports = db.model('User', User);
