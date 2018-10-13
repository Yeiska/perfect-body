const express = require("express");
const mongoose = require("mongoose");
const routes = require("./routes");
const app = express();
const seedDB = require("./scripts/seedDB");
const db = require("./models");
const PORT = process.env.PORT || 3001;

app.use(express.urlencoded({ extended: true}));
app.use(express.json());

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
  

//Start the API server
app.listen(PORT, function() {
    console.log(`Listening on PORT ${PORT}!`);
})