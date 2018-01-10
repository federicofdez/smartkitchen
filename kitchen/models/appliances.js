var mongoose = require('mongoose');

var Schema = mongoose.Schema;

// create a schema
var applianceSchema = new Schema({
  id: Schema.Types.ObjectId,
  name: { type: String, required: true},
  actions: [{
  	name : String,
    endpoint : String
  }],
  isON: Boolean
});

// the schema is useless so far
// we need to create a model using it
var Appliance = mongoose.model('Appliance', applianceSchema);

// make this available to our users in our Node applications
module.exports = Appliance;