// set up

var express      = require('express');
var app          = express();
var mongoose     = require('mongoose');
var morgan       = require('morgan'); // log requests from the console (express4)
var bodyParser   = require('body-parser'); // pull information from HTML POST(express4)
var methodOverride = require('method-override'); //simulate DELETE and PUT (express4)

// configuration

mongoose.connect('mongodb://node:node@mongo.onmodulus.net:27017/uwO3mypu'); // connect to mongoDB database on modulus.io

app.use(express.static(__dirname + '/public'));

app.use(morgan('dev')); // log every request to the console

app.use(bodyParser.urlencoded({'extended':'true'})); // parse application/x-www-form-urlencoded

app.use(bodyParser.json()); // parse application/json

app.use(bodyParser.json({ type: 'application/vnd.api+json'})); // parse application/vnd.api+json as json

app.use(methodOverride());

// define model ================================
var Todo = mongoose.model('Todo', {
  text : String
});

// api -----------------------------------------
// get all todos
app.get('/api/todos', function(req, res) {

  // PAUSED HERE http://scotch.io/tutorials/javascript/creating-a-single-page-todo-app-with-node-and-angular#creating-our-node-api
})

// listen => start app with node server.js
app.listen(8080);
console.log("Magic happens on 8080");

