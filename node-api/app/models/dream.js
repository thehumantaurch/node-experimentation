var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var DreamSchema = new Schema({
  name: String
});

module.exports = mongoose.model('Dream', DreamSchema);