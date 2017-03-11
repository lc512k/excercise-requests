const express = require('express');
const bodyParser = require('body-parser');
require('isomorphic-fetch');
const app = express();

// Serve your static files
app.set('view engine', 'jade');
app.get('/', function(req, res) {
    res.sendfile('index.html', {root: __dirname })
});

// parse JSON POST bodies
app.use(bodyParser());

// Call the different remote server endpoints
app.post('/doItFromTheServer', function (req,res) {

	type = req.body.type;

	switch (type) {
		case 'cors':
			url = 'http://localhost:9999/with-cors-enabled';
			break;
		case 'no-cors':
			url = 'http://localhost:9999/with-cors-disabled';
			break;
		case 'jsonp':
			url = 'http://localhost:9999/with-cors-disabled/?callback=?';
			break;
		default:
			break;
	}

	// Make the API call to the remote server
	fetch(url).then(function (response) {
		return response.json();
	}).then(function (body) {
		res.send(body)
	}).catch(function (err) {
		res.send({message: 'ERROR: JSONP is only for the client'})
	});
})

app.listen(process.env.PORT || 8888, () => {
	console.log('The server where your site is running');
	console.log('listening on port 8888');
});

