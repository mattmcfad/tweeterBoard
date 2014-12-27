var express = require("express");
var router = require("express").Router();

router.get("/", function (req, res) {
	if (req.err){
		console.warn(err.message);
	}
	else {
		res.status(200).sendFile("./layouts/app.html", {"root": __dirname + "/../public/"});
	}
});

module.exports = router;
