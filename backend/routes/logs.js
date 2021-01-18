const express = require("express");
const router = express.Router();
const fs = require("fs");
const path = require("path");

// Note: This endpoint assumes that the log file is fine and doesn't need to be validated.
// depending on the situation, it might make sense practice defensive coding
// which I have neglected for the sake of spending time on the front-end.
router.get("/logs", function (req, res, next) {
	const logFile = path.resolve(__dirname, "../", "log-file.txt");
	fs.readFile(logFile, "utf8", function (err, data) {
		if (err) throw err;
		// Count instances of severity types to return with data to the front end.
		let infoCount = 0;
		let warningCount = 0;
		let errorCount = 0;

		const logs = data.split("\n");

		// Parse the logs so we can return a nice easily parsed object to the front end
		const parsedLogs = logs.map((line) => {
			const datetime = line.substring(0, 23); // First 23 chars will be datetime.
			const severityAndMessage = line.substring(24, line.length).split(" "); // Rest is severity and message.
			const severity = severityAndMessage.shift();
			const message = severityAndMessage.join(" ");

			if (severity === "INFO") {
				infoCount++;
			} else if (severity === "WARNING") {
				warningCount++;
			} else if (severity === "ERROR") {
				errorCount++;
			}

			return { datetime, severity, message };
		});

		res.send({
			logs: parsedLogs,
			total: parsedLogs.length,
			errorCount,
			infoCount,
			warningCount,
			errorCount,
		});
	});
});

module.exports = router;
