const router = require("express").Router();
const db = require("../models");

// Route paths are found from api.js in public folder

// GET request for /api/workouts
router.get("/api/workouts", (req, res) => {
  db.Workout.find({})
    .then((dbWorkout) => {
      res.json(dbWorkout);
    })
    .catch((err) => {
      res.json(err);
    });
});
// PUT request for /api/workouts
router.put("/api/workouts/:id", (req, res) => {
  db.Workout.findByIdAndUpdate(req.params.id, {
    $push: {
      exercises: req.body,
    },
  })
    .then((dbWorkout) => {
      res.json(dbWorkout);
    })
    .catch((err) => {
      res.json(err);
    });
});
// POST request for /api/workouts
router.post("/api/workouts", (req, res) => {
  db.Workout.create(req)
    .then((dbWorkout) => {
      res.json(dbWorkout);
    })
    .then((dbWorkout) => {
      res.json(dbWorkout);
    })
    .catch((err) => {
      res.json(err);
    });
});
// GET request for /api/workouts/range
router.get("/api/workouts/range", (req, res) => {
  db.Workout.find({})
    .then((dbUser) => {
      res.json(dbUser);
    })
    .catch((err) => {
      res.json(err);
    });
});

module.exports = router;
