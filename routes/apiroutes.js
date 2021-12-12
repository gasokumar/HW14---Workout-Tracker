const router = require("express").Router();
const db = require("../models");

// Route paths are found from api.js in public folder

// GET request for /api/workouts
app.get("/api/workouts", (req, res) => {
  db.Workout.find({})
    .then((dbWorkout) => {
      res.json(dbWorkout);
    })
    .catch((err) => {
      res.json(err);
    });
});
// PUT request for /api/workouts

// POST request for /api/workouts

// GET request for /api/workouts/range

module.exports = router;
