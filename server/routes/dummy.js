var express = require("express");
var router = express.Router();
var passport = require("passport");
var path = require("path");
var User = require("../models/user");

router.get("/", function(req,res,next){
    res.sendFile(path.resolve(__dirname, "../public/assets/views/routes/dummy.html"));
});

module.exports = router;
