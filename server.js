
var express = require('express');
var bodyParser = require('body-parser');
var path = require('path');

var app = express();

var PORT = process.env.PORT || 8000;

app.use(express.static(__dirname + '/app/css'));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: 'application/vnd.api+json' }));

// api & html routes
require('./app/routing/apiRoutes')(app);
require('./app/routing/htmlRoutes')(app);

app.listen(PORT, function () {
  console.log('App listening on http://localhost: ' + PORT);
});