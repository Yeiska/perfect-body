var mongoose = require("mongoose");
var Schema = mongoose.Schema;
var Workoutschema = new Schema({
    workout: { type: String, required: true, unique: true },
    routine: { type: String, required: true },
    sets: { type: String, required: true },
    reps: { type: String, required: true }

});

const Workout = mongoose.model("Workout", Workoutschema);

module.exports = Workout;