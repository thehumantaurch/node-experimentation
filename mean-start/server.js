// modules ======================================
var express         = require('express');
var app             = express();
var bodyParser      = require('body-parser');
var methodOverride  = require('method-override');

// configuration

//config files
var db = require('./config/db');

// set our port
var port = process.env.PORT || 8080;

// connect to our mongoDB database
var mongoose = require('mongoose');
mongoose.connect('mongodb://taurch:daydream@ds053300.mongolab.com:53300/nodey-blog');