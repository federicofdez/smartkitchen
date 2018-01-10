var mongoose = require('mongoose');

var Schema = mongoose.Schema;

// create a schema
var supplySchema = new Schema({
  id: Schema.Types.ObjectId,
  name: { type: String, required: true},
  units: { type: String, required: true},
  desired: { type: String, required: true},
  value: Number,
  autoPurchase: Boolean,
  location: String,
  fsr: Number
});

// the schema is useless so far
// we need to create a model using it
var Supply = mongoose.model('Supply', supplySchema);

// make this available to our users in our Node applications
module.exports = Supply;