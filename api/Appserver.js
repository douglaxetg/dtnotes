'user strict';
const express = require('express'),
  app = express(),
  bodyParser = require('body-parser');
port = process.env.PORT || 3001;

app.listen(port);

console.log('API server started on: ' + port);

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

var routes = require('./routes/Routes'); //importing route
routes(app); //register the route
