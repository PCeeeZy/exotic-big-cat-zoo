// DEPENDCIES
const path = require('path');
const router = require('express').Router();

// API ROUTES
router.use("/api", require('./api'));

// DEFAULT REQUEST -- send them to index.html
router.use((req, res) => {
    res.sendFile(path.join(__dirname, "../public/index.html"))
});

// EXPORTS
module.exports = router;