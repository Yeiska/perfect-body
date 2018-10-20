const router = require("express").Router();
const workoutRoutes = require("./workout");
const userRoutes = require("./users");
const authRoutes = require("./auth-routes");
//routes
router.use("/workout", workoutRoutes);
router.use("/users", userRoutes);
router.use("/authRoutes/auth", authRoutes);
module.exports = router;