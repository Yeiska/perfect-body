const express = require("express");
const mongoose = require("mongoose");
const routes = require("./routes");
const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.urlencoded({ extended: true}));
app.use(express.json());

if(process.env.NODE_ENV === "production"){
    app.use(express.static("client/build"));
}

//add routes
app.use(routes);

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/perfectDB");

//Start the API server
app.listen(PORT, function() {
    console.console.log(`Listening on PORT ${PORT}!`);
})