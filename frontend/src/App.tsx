import React, { useEffect } from "react";
import Statistics from "./components/statistics";
import Log from "./components/log";
import useFetch from "./hooks/useFetch";
import { useDispatch } from "react-redux";
import { updateLogInfo } from "./redux";
import "./App.css";

const App = () => {
	const [response, loading, error] = useFetch("/api/logs");
	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(updateLogInfo(response));
	}, [response, dispatch]);

	return (
		<div className="app">
			{loading && "Loading"}
			{error && "Error!"}
			<Statistics />
			<Log />
		</div>
	);
};

export default App;
