const router = require("express").Router();
const passport = require("passport");

//auth login
router.get("/login", (req, res) => {
  //handle with passport
  res.send("login");
});

//auth loging
router.get("/google", (req, res) => {
  //handle with passport
  res.send("logging in with google");
});


//auth with google
// router.get("/google", passport.auth-routes("google", {
//   scope: ["profile"]
// }));

//auth logout
router.get("/logout", (req, res) => {
  //handle with passport
  res.send("logging out");
});


module.exports = router;