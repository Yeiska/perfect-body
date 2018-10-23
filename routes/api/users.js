const express = require('express');
const router = express.Router();
var db = require('../../models');
var bcrypt = require('bcrypt');
const saltRounds = 10;



//register: storing name, email and password and redirecting to home page after signup
router.post('/user/create', function (req, res) {
  //bcrypt.hash(req.body.passwordsignup, saltRounds, function (err,   hash) {
 db.User.create({
   username: req.body.username,
   password: req.body.password
   }).then(function(data) {
    if (data) {
      console.log(data);
    res.json({status: 200});
    }
  }).catch(err => console.log(err));
 //});
});



//login page: storing and comparing email and password,and redirecting to home page after login
router.post('/user', function (req, res) {
  db.User.findOne({
       where: {
           email: req.body.email
              }
  }).then(function (user) {
      if (!user) {
         res.redirect('/');
      } else {
bcrypt.compare(req.body.password, user.password, function (err, result) {
     if (result == true) {
         res.send('/Home');
     } else {
      res.send('Incorrect password');
      res.redirect('/');
     }
   });
  }
});
});



  /* Handle Registration POST */
  
  router.post("/signup", function(req, res) {
    // Create a new user using req.body
    User.create(req.body)
      .then(function(dbUser) {
        // If saved successfully, send the the new User document to the client
        res.json(dbUser);
      })
      .catch(function(err) {
        // If an error occurs, send the error to the client
        res.json(err);
      });
  });
	router.post('/signup', function(req, res) {
		res.redirect('/home');
		//failureRedirect: '/signup'
		 
	});

	/* GET Home Page */
	router.get('/Home', function(req, res){
		res.render('Home', { user: req.user });
	});

	/* Handle Logout */
	router.get('/signout', function(req, res) {
		req.logout();
		res.redirect('/');
	});

// 	return router;
// }

//const router = require("express").Router();
const usersController = require("../../controllers/usersController");

// Matches with "/api/users"
router.route("/")
  .get(usersController.findAll)
  //.post(usersController.create);

// Matches
// router
//   .route("/:id")
//   .get(usersController.findById)
//   .put(usersController.update)
//   .delete(usersController.remove);

module.exports = router;