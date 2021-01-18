var express = require("express");
var router = express.Router();

/* GET home page. */
router.get("/", function (req, res, next) {
	res.send({ message: "hello, you probably want to check out: /api/logs" });
});

module.exports = router;
