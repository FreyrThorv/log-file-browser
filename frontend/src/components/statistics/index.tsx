import React from "react";
import "./statistics.css";

const Statistics = () => {
	const infoCount = 4;
	const warningCount = 2;
	const errorCount = 1;
	return (
		<div>
			<h2>Statistics</h2>
			<p>Info: {infoCount}</p>
			<p>Warnings: {warningCount}</p>
			<p>Errors: {errorCount}</p>
		</div>
	);
};

export default Statistics;
