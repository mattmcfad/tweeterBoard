var express = require('express'),
	bodyParser = require('body-parser'),
	Post = require('./models/post');

var	app = express(),
	port = 8888;

app.use(bodyParser.json());

app.get('/', function (req, res) {
	// res.status(200).send('<h1>hello world </h1>');
	res.sendfile('layouts/posts.html');
});



app.get('/api/posts', function (req, res, next) {
	Post.find(function(err, posts) {
		if (err) {
			return next(err)
		}
		res.json(posts);
	})	
});

app.post('/api/posts', function(req, res, next) {
	
	var post = new Post({
		username: req.body.username,
		body: req.body.body
	});
	
	post.save(function(err, post){
		if (err) {
			console.log("fac");
			return next(err);
		}
		res.status(201).json(post);
	})
});

app.listen(port, function(){
	console.log("listening on localhost:" + port);
})