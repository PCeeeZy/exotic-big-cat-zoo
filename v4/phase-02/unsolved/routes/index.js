const path = require('path');
const router = require('express').Router();

router.use(function(req, res) {
    res.sendFile(path.join(__dirname, '../public/index.html'));
});

module.exports = router;