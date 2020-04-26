const path = require("path");
const router = require("express").Router();
// const userRoutes = require("./users");
const animalRoutes = require("./animals");

// Animal Routes
router.use("/animals", animalRoutes);

// For anything else, render the html page
router.use(function(req, res) {
  res.sendFile(path.join(__dirname, "../../public/index.html"));
});

module.exports = router;
