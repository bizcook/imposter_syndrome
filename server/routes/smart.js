var express = require("express");
var router = express.Router();
var passport = require("passport");
var path = require("path");
var User = require("../models/user");
var Smart = require("../models/smart");

router.get("/", function(req,res,next){
  Smart.find(function(err, data){
    if(err){
      console.log("ERROR in INDEXJS to GET smart", err);
    }
    console.log("in index.js during get call on smart route:");
    res.send(data);
  });
});

module.exports = router;
