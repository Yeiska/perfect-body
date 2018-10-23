const router = require("express").Router();
const workoutController = require("../../controllers/workoutController");

// Matches with "/api/workout"
router.route("/")
  .get(workoutController.findAll)
  //.post(workoutController.create);


module.exports = router;