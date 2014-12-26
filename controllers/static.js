var express = require("express");
var router = express.Router();

router.get('/', function(req, res) {
	res.render("index.jade", {dev: {name: "matt"}});
});

module.exports = router;
