const express = require('express');
const app = express();

// Set tell the browser you are sending JSON on all endpoints
app.use(function (req, res, next) {
	res.setHeader('Content-Type', 'application/json');
	next();
})

// Allow requests from anywhere
app.get('/with-cors-enabled', function (req, res) {
	console.log('Request came in for with-cors-enabled enpoint');
	res.header("Access-Control-Allow-Origin", "*");
	res.send(JSON.stringify({
		message: 'I don\'t know who you are, but here\'s some data! \\o/'
	}));
})

// Allow requests only from the same origin
app.get('/with-cors-disabled', function (req, res) {

	// But let JSONP by-pass that restriction
	// (i.e. Darksky)
	if (req.query.callback) {
		console.log('Request came in for with-cors-enabled enpoint and JSONP', req.query.callback);
		res.jsonp(req.query.callback + '('+ JSON.stringify({ message: 'JSONP FTW!' }) + ');'); // insecure-ish
	}

	// Proper, same-origin request
	else {
		console.log('Request came in for with-cors-disabled enpoint');
		res.send(JSON.stringify({
			message: 'Got a safe request'
		}));
	}
})

app.listen(process.env.PORT || 9999, () => {
	console.log('The server where the APIs are running');
	console.log('listening on port 9999');
});