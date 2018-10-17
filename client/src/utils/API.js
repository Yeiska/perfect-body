import axios from "axios";

export default {
    getWorkouts: function () {
        return axios.get("/api/workout");
    },
    // Saves a ref to the database
    saveWorkouts: function (WorkoutsData) {
        return axios.post("/api/Workouts", WorkoutsData);
    },
    //Login with Google
    login: function () {
        return axios.get("/api/auth-routes/auth/google");
    },
    logout: function () {
        return axios.get("/api/auth-routes/auth/logout");
    }
};