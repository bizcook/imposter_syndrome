var express = require("express");
var router = express.Router();
var passport = require("passport");
var path = require("path");
//add if adding more things
var Smart = require("../models/smart");
var bodyParser = require("body-parser");
var mongoose = require("mongoose");
var Schema = mongoose.Schema;

//


router.post("/smart", function(req, res){
  console.log("HERE IS THE REQ BODY", req.body);

  var addedSmart = new Smart({"positive" : req.body.positive});
  addedSmart.save(function(err, data){
    if(err){
      console.log("error saving smart:", err);
    }
      console.log("ADDING SMART / SAVE ", req.body.positive); //this is being hit on submit
    res.send(data);
  });
});

router.post("/", passport.authenticate("local", {
    successRedirect: "/assets/views/users.html",
    failureRedirect: "/"
}));



router.get("/*", function(req,res,next){
    console.log(req.params[0]);
    var file = req.params[0] || "/assets/views/index.html";
    res.sendFile(path.join(__dirname, "../public", file));
});

module.exports = router;
