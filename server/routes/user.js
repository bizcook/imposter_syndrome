var express = require("express");
var router = express.Router();
var User = require("../models/user");

router.get("/", function(req,res,next){
    res.json(req.isAuthenticated());
});

router.get("/name", function(req,res,next){
    console.log("Hello", req.isAuthenticated());
    var resUser = {
        username: req.user.username,
        firstname: req.user.firstname,
        lastname: req.user.lastname,
        email: req.user.email,
        datecreated: req.user.lastlogin
    };
    res.json(resUser);
});

module.exports = router;
