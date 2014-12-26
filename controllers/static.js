var express = require("express");
var router = express.Router();

// router.get('/', function (req, res) {
// 	res.sendfile('layouts/posts.html');
// });

router.get('/', function(req, res) {
	res.render("index.jade", {dev: {name: "matt"}});
});

// make filepath assets
//router.use(express.static(__dirname + "/public/assets/"));

module.exports = router;
