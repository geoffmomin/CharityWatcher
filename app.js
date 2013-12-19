var express  = require('express');
var app      = express();

var campaignController = require('./controllers/campaign').get(require('./models/campaign'));

// Express and Handlebars middlewear Stack
app.use(express.bodyParser());

app.get('/campaign/:name', campaignController.get);

app.listen(8080, function() {
	console.log('Listening on port 8080');
});