var mongoose = require('mongoose');

mongoose.connect('mongodb://dev:walmartdev@ds047020.mongolab.com:47020/nodetweeter', function () {
	console.log('mongodb connected');
});

module.exports = mongoose;
