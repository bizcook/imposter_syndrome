var mongoose = require("mongoose");
var Schema = mongoose.Schema;


//create schema type
var Smarts = new Schema({
  positive: {type: String}
});

module.exports = mongoose.model("Smarts", Smarts);
