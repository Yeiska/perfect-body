const db = require("../models");
seedDB = () => {
const workoutSeed = [
    {
        workout: "Pull workout 1",
        routine: ["weighted pull-up", 
        "wide lat pull down",
         "bent over bar bell row",
         "lateral raise", 
         "lateral raise machine", 
         "lying down dace pull",
         "single arm dumbbell row", 
         "barbell curl", 
         "dumbbell hammer curl", 
         "rope crunch"],
        sets: ["3", "4", "4", "3", "3", "4", "3", "3", "3", "3"],
        reps: ["6-8", "12-15", "8-12", "8-12", "15-20", "12-15", "10-12", "12-15","12-15", "15-20"]
    },
    {
        workout: "Pull Workout 2",
        routine: ["Rope PullDown",
         "bodyweight pull-up",
         "bent over dumbbell row",
         "seated cable row",
         "cable curl",
         "preacher curl", 
         "alternating dumbbell curl",
         "hammer strength shrug",
         "dumbbell hammer curl",
         "single arm pulldown"],
        sets: ["5", "4", "4", "4", "4", "4", "3", "3", "3", "3"],
        reps: ["15-20", "8-12", "6-12", "8-15", "12-15", "6-12", "8-10", "12-15", "15-20", "15-20"]
     },
    {
        workout: "Push Workout 1",
        routine: ["incline dumbbell press",
        "standing over head press",
        "peck fly",
        "tricep extension machine",
        "rope extension",
        "pushups close grip",
        "pushups wide grip",
        "decline medicine ball throw"],
        sets: ["4", "4", "4", "5", "5", "3", "3", "4"],
        reps: ["6-8", "8-12", "10-15", "10-15", "12-15", "10-15", "10-15", "10-15"]
    },
    {
        workout: "Push Workout 2",
        routine: [ "incline dumbbell press",
        "cable fly",
        "incline barbell",
        "pec deck",
        "tricep pushdown",
        "dumbbell french press",
        "tricep extension machine",
        "rope crunches"],
        sets: [ "4", "4", "3", "3", "5", "4", "4", "5"],
        reps: [ "6-8", "12-15", "8-12", "10-15", "8-12", "8-10", "12-15", "15-25"]
    },
    {
        workout: "Leg Workout 1",
        routine: ["leg extension",
        "lying leg curl",
        "leg press",
        "stiff leg deadlift",
        "machine hip thrust",
        "standing calf raises",
        "body weight lunges per leg"],
        sets: [ "4", "4", "4", "4", "4", "4", "4"],
        reps: [ "10-15", "12-15", "10-12", "10-12", "8-10", "15-20", "20"]
    },
    {
        workout: "Leg Workout 2",
        routine: ["squats",
        "leg press",
        "lying hamstring curl",
        "hip thrusts",
        "leg extensions",
        "standing superset seated calf raise",
        "bosu ball crunches"],
        sets: [ "3", "4", "4", "4", "4", "4", "4"],
        reps: ["6-12", "8-12", "12-15", "10-12", "12-15", "12-20", "20-25"]
    }
];

// emptying previous entries and reseeding to ensure no duplicates. 
db.Workout
.find({})
.then(() => db.Workout.collection.insertMany(workoutSeed))
.then( data => {
    console.log(data.result.n + "Workouts inserted");
    process.exit(0);
})
.catch( err => {
    console.log(err);
    process.exit(1);
});
};

module.exports = seedDB;