const router = require("express").Router();
const workoutRoutes = require("./workout");

//workout routes
router.use("/workout", workoutRoutes);

module.exports = router;