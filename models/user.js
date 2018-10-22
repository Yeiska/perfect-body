var mongoose = require('mongoose');
const Schema = mongoose.Schema;
const bcrypt = require('bcrypt');
const saltRounds = 10;

const UserSchema = new Schema({
    username: { type: String, trim: true, unique: true, match: [/.+@.+\..+/, "Please enter a valid e-mail address"], required: true },
    password: {
        type: String,
        trim: true,
        required: "Password is Required",
        validate: [
            function (input) {
                return input.length >= 6;
            },
            "Password should be longer."
        ]
    },
    // // email: {
    // //     type: String,
    // //     unique: true,
    // //     match: [/.+@.+\..+/, "Please enter a valid e-mail address"]
    // },
    userCreated: {
        type: Date,
        default: Date.now
      }
});

UserSchema.method.generateHash = function(password){
    return bcrypt.hashSync(password, bcrypt.genSaltSync(9));
};

UserSchema.method.validPassword = function(password){
    return bcrypt.compareSync(password, this.password);
};

// This creates our model from the above schema, using mongoose's model method
var User = mongoose.model("User", UserSchema);

// Export the User model
module.exports = User;