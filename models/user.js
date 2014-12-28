var db = require('../db');

var User = db.Schema({
		username: String,
		password: String
});

module.exports = db.model('User', User);
