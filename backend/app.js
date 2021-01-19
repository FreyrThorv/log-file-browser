var createError = require("http-errors");
var express = require("express");
var path = require("path");
var cookieParser = require("cookie-parser");
var logger = require("morgan");
var fs = require("fs");

var indexRouter = require("./routes/index");
var logsRouter = require("./routes/logs");

var app = express();

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

app.use("/", indexRouter);
app.use("/api", logsRouter);

// catch 404 and forward to error handler
app.use(function (req, res, next) {
	next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
	res.status(err.status || 500);
	res.send({ error: err.message });
});

module.exports = app;

// This awkwardly placed code makes logs every n seconds.
// This is to demonstrate how the front end can handle new data.
const interval = 3;
console.log(`Making logs every ${interval} seconds`);
const logFilePath = path.resolve(__dirname, "log-file.txt");

function getRandomInt(max) {
	return Math.floor(Math.random() * Math.floor(max));
}

setInterval(async () => {
	const datetime = new Date();
	const formattedDatetime = datetime
		.toISOString()
		.substr(0, 23)
		.replace(".", ",")
		.replace("T", " ");

	const data = [
		`ERROR Some error message`,
		`WARNING Some warning message of reversed`,
		`WARNING Some warning message of reversed`,
		`INFO Some info message`,
		`INFO Some info message`,
		`INFO Some info message`,
		`INFO Some info message`,
		`INFO Some info message`,
	];

	fs.appendFile(logFilePath, `\n${formattedDatetime} ${data[getRandomInt(8)]}`, function (err) {
		if (err) throw err;
		console.log("1 new log entry made");
	});
}, interval * 1000);
