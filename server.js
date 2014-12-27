var express = require('express'),
	bodyParser = require('body-parser'),
	gutil = require ('gulp-util');

var	app = express(),
	port = 8888;

app.use(bodyParser.json());
app.engine('jade', require('jade').__express);
app.set('views', __dirname + '/views');


app.use(require('./controllers/api/posts'));
app.use(require('./controllers/static'));

app.use(express.static(__dirname + "/public"));


app.listen(port, function() {
	gutil.log(gutil.colors.green("Server started on localhost:" + port));
});
