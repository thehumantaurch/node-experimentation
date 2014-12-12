// BASE SETUP
// ===============================================

// call the packages-- pulls in all the packages from npm
var express = require('express'); // calls express
var app = express();              // define the app using express
var bodyParser = require('body-parser');

var mongoose = require('mongoose');
mongoose.connect('mongodb://taurch:daydream@ds053300.mongolab.com:53300/nodey-blog');

var Dream = require('./app/models/dream.js');

// configure app to use bodyParser() => this lets us get data from POST

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

var port = process.env.PORT || 8080; // sets port

// ROUTES FOR THE API
// =================================================
var router = express.Router(); // gets instance of Express router

router.use(function(req, res, next) {
  console.log('Something is happening.');
  next(); // make sure we go to the next route and don't stop the processing here
});

router.get('/', function(req, res) {
  res.json({message: 'hooray! you got at least one thing working!'});
});

router.route('/dreams')
  // create a new dream (accessed at POST http://localhost:8080/api/dreams)
  .post(function(req, res) {

    var dream = new Dream(); // create a new instance of Dream model
    dream.name = req.body.name; // sets Dream's name (comes from request)

      dream.save(function(err){
        if (err)
          res.send(err);

        res.json({ message: 'Dream created!'});
      });
    })

  .get(function(req, res) {
    Dream.find(function(err, dreams){
      if (err)
        res.send(err);

      res.json(dreams);
    });
  });

router.route('/dreams/:dream_id')

  .get(function(req, res) {
    Dream.findById(req.params.dream_id, function(err, dream) {
      if (err)
        res.send(err);
      res.json(dream);
    });
  })

  .put(function(req, res) {

    Dream.findById(req.params.dream_id, function(err, dream) {
      if (err)
        res.send(err);

      dream.name = req.body.name; // the editing

      dream.save(function(err) {
        if (err)
          res.send(err);

        res.json({ message: "Dream updated! "});
      });

    });
  });

// REGISTER THE ROUTES -----------------------------
// all routes will be prefixed with '/api'
app.use('/api', router);

// START SERVER
// =================================================

app.listen(port);
console.log('Magic happens on port ' + port);
