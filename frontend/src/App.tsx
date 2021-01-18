import React from "react";
import Statistics from "./components/statistics";
import Log from "./components/log";

import "./App.css";

const App = () => {
	return (
		<div className="app">
			<Statistics />
			<Log />
		</div>
	);
};

export default App;
