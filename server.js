var express = require('express'),
	bodyParser = require('body-parser'),
	gutil = require ('gulp-util');

var	app = express(),
	port = 8888;

app.use(bodyParser.json());

app.use('/api/session', require('./controllers/api/session'));
app.use('/api/users', require('./controllers/api/users'));
app.use('/api/posts', require('./controllers/api/posts'));
app.use('/', require('./controllers/static'));

// relative path client side.
app.use(express.static(__dirname + "/public"));


app.listen(port, function() {
	gutil.log(gutil.colors.green("Server started on localhost:" + port));
});
