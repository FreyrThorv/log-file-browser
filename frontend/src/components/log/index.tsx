import React from "react";
import useFetch from "../../hooks/useFetch";
import "./log.css";

const Log = () => {
	const [response, loading, error] = useFetch("/api/logs");

	return (
		<div className="log">
			<h2>Log</h2>
			{JSON.stringify(response)}
			{loading && "Loading"}
			{error && "Error"}
		</div>
	);
};

export default Log;
