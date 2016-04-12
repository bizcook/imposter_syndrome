var express = require("express");
var router = express.Router();
var passport = require("passport");
var path = require("path");

console.log('quote route');

router.get("/quote", function(req,res,next){
  console.log("in the quote router");
    res.sendFile(path.resolve(__dirname, "../public/assets/data/quote.json"));
});

module.exports = router;
