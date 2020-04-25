// DEPENDCIES
const path = require('path');
const router = require('express').Router();

// DEFAULT REQUEST -- send them to index.html
router.use((req, res) => {
    res.sendFile(path.join(__dirname, "../public/index.html"))
});

// EXPORTS
module.exports = router;