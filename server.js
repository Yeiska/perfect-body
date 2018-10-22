const express = require("express");
const mongoose = require("mongoose");
const routes = require("./routes");
const app = express();
const bodyParser = require("body-parser");
const logger = require("morgan");
const User = require("./user.js");

//const seedDB = require("./scripts/seedDB");
//const db = require("./models");
const PORT = process.env.PORT || 3001;

// Configure middleware
app.use(express.urlencoded({ extended: true}));
app.use(express.json());
// Use morgan logger for logging requests
app.use(logger("dev"));
// Use body-parser for handling form submissions
app.use(bodyParser.urlencoded({ extended: true }));
// Use express.static to serve the public folder as a static directory
app.use(express.static("public"));


if(process.env.NODE_ENV === "production"){
    app.use(express.static("client/build"));
}

//add routes
app.use(routes);

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/workout");
mongoose.connection.once('open', function() {
    console.log("connection has been made!!!");
    mongoose.connection.db.collection('workouts').count(function(err, count) {
        if (count === 0) {
            seedDB();
            console.log("seededDB");
        }else{
            console.log("No seed needed!!");
        }
    });
});
  
// Connect to the Mongo DB
mongoose.connect("mongodb://localhost/userdb", { useNewUrlParser: true });



//Start the API server
app.listen(PORT, function() {
    console.log(`Listening on PORT ${PORT}!`);
})