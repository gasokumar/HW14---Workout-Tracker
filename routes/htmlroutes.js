// Creating a router variable/importing the express router.
// Remember, we're organizing the routes in this router. Later, we export it so that the routes can be used.
const router = require("express").Router();
const path = require("path");
const db = require("../models");

// Will need routes for index.html, exercise.html, and stats.html
// These will all be GET routes that will serve the static html files.

router.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "../public/index.html"));
});

router.get("/exercise", (req, res) => {
  res.sendFile(path.join(__dirname, "../public/exercise.html"));
});

router.get("/stats", (req, res) => {
  res.sendFile(path.join(__dirname, "../public/stats.html"));
});

// Exporting the routes so they can be used in our server.
module.exports = router;
