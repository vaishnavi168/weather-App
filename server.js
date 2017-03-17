var express = require('express');
//create our app
var app = express();

app.use(express.static('public'));

app.listen(3000, function () {
	// body...
	console.log('Express server is up on port 3000');
});