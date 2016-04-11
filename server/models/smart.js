var mongoose = require("mongoose");
var Schema = mongoose.Schema;


//create schema type changed from Smarts
var Smart = new Schema({
  positive: {type: String}
});
                                //changed from smarts on both
module.exports = mongoose.model("Smart", Smart);
