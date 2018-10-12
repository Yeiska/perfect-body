var mongoose = require("mongoose");
var Schema = mongoose.Schema;
var Workoutschema = new Schema({
    workout: {
        type: String,
        required: true
    },

})

const Workout = mongoose.model("Workout", Workoutschema);

module.exports = Workout;