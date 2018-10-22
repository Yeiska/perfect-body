const db = require("../models");
userdb = () => {
const user = [
  {
    username : "username",
    password: "password"
  }

];


// emptying previous entries and reseeding to ensure no duplicates. 
db.userdb.collection.insertMany(user)
.then( data => {
    console.log(data.result.n + "user created");
    process.exit(0);
})
.catch( err => {
    console.log(err);
    process.exit(1);
});
};

module.exports = userdb;