const mongoose = require("mongoose");
const Schema = mongoose.Schema;
// Followed form inputs from exercise.html
const WorkoutSchema = new Schema({
  exercise: [
    { type: String, trim: true },
    {
      name: { type: String, trim: true },
    },
    {
      distance: { type: Number, default: 0 },
    },
    { duration: { type: Number } },
    { weight: { type: Number } },
    { sets: { type: Number } },
    { reps: { type: Number } },
  ],
});

const Workout = mongoose.model("Workout", WorkoutSchema);

module.exports = Workout;
