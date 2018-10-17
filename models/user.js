var mongoose = require('mongoose');
const Schema = mongoose.Schema;
 
const userSchema = new Schema({
    username: { type: String, required: true },
    password: {type: String, required: true },
    workouts: [
        {
        type: Schema.Types.ObjectId,
        workout: "Workout"
        }
      ]
});

const User = mongoose.model("User", userSchema);

module.exports = User;