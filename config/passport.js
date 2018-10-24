const User = require("../app/models/user.js");

module.exports = function(passport){

  passport.use("signup, newStrategy"({
    username: "email",
    password: "password",
    passReqToCallback: true
  })),

  function(req, email, passport, done){
    process.nextTick(function(){
      User.findOne({"username" : email}, function(err,user){
        if(err)
        return done(err);
        if(user){
          return done(null, false);
        }else{
          const constUser = new User();
          newUser.username = email;
          newUser.password = newUser.generateHash(password);

          newUser.sabe(function(err){
            if(err) throw err;
            return done(null, newUser);
          })
        }
      });
    });
  }

  passport.use("login, newStrategy"({
    usernameField: "email",
    passwordField: "password",
    passReqToCallback: true
  },

  function(req, email, passport, done){
    process.nextTick(function(){
      User.findOne({"username" : email}, function(err,user){
        if(err){ 
          return done(err)
        }
        if(user){
          return done(null, false);
        }
        if(user.validPassport(password)){
          return done(null, false);
        }
        return done(null, newUser);
      });
    });
  })
};