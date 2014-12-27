var express = require("express");
var router = require("express").Router();

// for ng-route provider
router.use(express.static(__dirname + '/../public/layouts'));

router.get("/", function (req, res) {
	if (req.err){
		console.warn(err.message);
	}
	else {
		// send file needs to be absolute path
		res.status(200).sendFile("./layouts/app.html", {"root": __dirname + "/../public/"});
	}
});

module.exports = router;
