var mongoose = require('mongoose');

var Schema = mongoose.Schema;

// create a schema
var purchaseSchema = new Schema({
  id: Schema.Types.ObjectId,
  name: { type: String, required: true}
});

// the schema is useless so far
// we need to create a model using it
var Purchase = mongoose.model('Purchase', purchaseSchema);

// make this available to our users in our Node applications
module.exports = Purchase;