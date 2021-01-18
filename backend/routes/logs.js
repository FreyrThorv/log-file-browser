var express = require("express");
var router = express.Router();

router.get("/logs", function (req, res, next) {
	// TOOD: Here I want to find the logs on the system and return them.
	res.send({ message: "respond with logs" });
});

module.exports = router;
