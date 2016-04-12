var express = require("express");
var app = express();
var cookieParser = require("cookie-parser");
var bodyParser = require("body-parser");

var passport = require("passport");
var session = require("express-session");
var localStrategy = require("passport-local");

var mongoose = require("mongoose");

//MODELS update if adding more
var User = require("./models/user");
var Smart = require("./models/smart");

//ROUTES update if adding more
var quote = require("./routes/quote");
var register = require("./routes/register");
var user = require("./routes/user");
var smart = require("./routes/smart");
var dummy = require("./routes/dummy");
var index = require("./routes/index");

app.use(session({
  secret: "secret",
  key: "user",
  resave: true,
  s: false,
  cookie: {maxAge: 60000, secure: false}
}));

app.use(cookieParser());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(passport.initialize());
app.use(passport.session());

//MONGOOOO SETUP
var mongoURI = "mongodb://localhost/imposter_syndrome";
var MongoDB = mongoose.connect(mongoURI).connection;

MongoDB.on("error", function(err){
  console.log("MONGO CONNECTION ERROR: ", err);
});

MongoDB.once("open", function(err){
  console.log("MONGO CONNECTION OPEN!!");
});

//PASSPORT SESSION!!
passport.serializeUser(function(user, done){
  done(null, user.id);
});

passport.deserializeUser(function(id, done){
  User.findById(id, function(err, user){
    if(err) done(err);
    done(null, user);
  });
});

passport.use("local", new localStrategy({
  passReqToCallback: true,
  usernameField: 'username'
}, function(req, username, password, done){
    User.findOne({username: username}, function(err, user){
      if(err) throw err;
      if(!user){
        return done(null, false, {message: "Incorrect username or password"});
      }

      user.comparePassword(password, function(err, isMatch){
        if(err) throw err;
        if(isMatch){
          return done(null, user);
        } else {
          done(null, false, {message: "Incorrect username or password"});
        }
      });
    });
  }
));

// use these routes...update if you add more
app.use("/quote", quote);
app.use("/register", register);
app.use("/user", user);
app.use("/smart", smart);
app.use("/dummy", dummy);
app.use("/", index);

app.set("port", (process.env.PORT || 4000));

app.listen(app.get("port"), function(){
  console.log("Listening on port: ", app.get("port"));
});

module.exports = app;
