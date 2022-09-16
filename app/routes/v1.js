const express = require("express");
const router = express.Router();

// routes...
router.get("/", (req, res) => {
    res.send('OK');
});

module.exports = router;