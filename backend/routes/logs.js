const express = require("express");
const router = express.Router();
const fs = require("fs");
const path = require("path");

// Note: This endpoint assumes that the log file is fine and doesn't need to be validated.
// depending on the situation, it might make sense practice defensive coding
// which I have neglected for the sake of spending time on the front-end.
router.get("/logs", function (req, res) {
	if (!req.query.page) {
		res.send({ message: "Validation error: send page number as a query string" }).statusCode(400);
	}
	const logFile = path.resolve(__dirname, "../", "log-file.txt");
	fs.readFile(logFile, "utf8", function (err, data) {
		if (err) throw err;
		// Count instances of severity types to return with data to the front end.
		let infoCount = 0;
		let warningCount = 0;
		let errorCount = 0;

		const logs = data.split("\n");

		// Parse the logs so we can return a nice easily parsed object to the front end
		const parsedLogs = logs
			.map((line) => {
				const datetime = line.substring(0, 19); // First 23 chars will be datetime. Leaving the miliseconds off, make 19.
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
			})
			.reverse();

		// Basic pagination logic
		const { page } = req.query;
		const toIndex = page * 100;
		const fromIndex = toIndex - 100;

		res.send({
			logs: parsedLogs.slice(fromIndex, toIndex),
			total: parsedLogs.length,
			infoCount,
			warningCount,
			errorCount,
		});
	});
});

router.get("/fresh-logs", function (req, res) {
	res.set("Cache-Control", "no-store"); // Disable cache for this endpoint

	if (!req.query.total || !req.query.page) {
		res
			.send({ message: "Validation error: send total and page as a query string" })
			.statusCode(400);
	}
	const logFile = path.resolve(__dirname, "../", "log-file.txt");
	fs.readFile(logFile, "utf8", function (err, data) {
		if (err) throw err;
		// Count instances of severity types to return with data to the front end.
		let infoCount = 0;
		let warningCount = 0;
		let errorCount = 0;
		const logs = data.split("\n");

		// Parse the logs so we can return a nice easily parsed object to the front end
		const parsedLogs = logs
			.map((line) => {
				const datetime = line.substring(0, 19); // First 23 chars will be datetime. Leaving the miliseconds off, make 19.
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
			})
			.reverse();

		const { total, page } = req.query;
		// Depending on which page the user is on return everything or just the stats.
		if (parsedLogs.length !== parseInt(total) && parseInt(page) === 1) {
			res.send({
				newLogs: true,
				logs: parsedLogs.slice(0, 100),
				total: parsedLogs.length,
				infoCount,
				warningCount,
				errorCount,
			});
		} else if (parsedLogs.length !== parseInt(total) && parseInt(page) !== 1) {
			res.send({
				newLogs: true,
				total: parsedLogs.length,
				infoCount,
				warningCount,
				errorCount,
			});
		} else {
			res.send({
				newLogs: false,
			});
		}
	});
});

module.exports = router;
