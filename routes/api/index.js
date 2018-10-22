const router = require("express").Router();
const workoutRoutes = require("./workout");
const userRoutes = require("./users");

//routes
router.use("/workout", workoutRoutes);
router.use("/users", userRoutes);

module.exports = router;