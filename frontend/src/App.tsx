import React, { FC, useEffect, useState } from "react";
import Statistics from "./components/statistics";
import Log from "./components/log";
import useFetch from "./hooks/useFetch";
import usePoll from "./hooks/usePoll";
import { useDispatch } from "react-redux";
import { updateLogInfo } from "./redux";
import { connect } from "react-redux";
import { ReduxState } from "./redux/types";
import "./App.css";

type PaginationType = {
	redux: ReduxState;
};

const App: FC<PaginationType> = ({ redux }) => {
	const { page, total } = redux;
	const [fetchNumber, setFetchNumber] = useState(0);
	const [response, loading, error] = useFetch(`/api/logs?page=${page}`);

	// passing in the fetchnumber so it can be added to the dependency array of the.
	// usePoll useEffect.
	const [pollResponse] = usePoll(`/api/fresh-logs?page=${page}&total=${total}`, fetchNumber);
	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(updateLogInfo(response));
	}, [response, dispatch]);

	useEffect(() => {
		const intervalId = setInterval(() => {
			// Increment the fetchNumber to re-run the fetch.
			setFetchNumber((prevNum) => prevNum + 1);
		}, 3 * 1000);
		return () => clearInterval(intervalId);
	}, [fetchNumber]);

	useEffect(() => {
		if (pollResponse && pollResponse.newLogs) {
			delete pollResponse.newLogs;
			dispatch(updateLogInfo(pollResponse));
		}
	}, [pollResponse, dispatch]);

	return (
		<div className="app">
			<Statistics />
			{loading && "Loading"}
			{error && "Error!"}
			<Log />
		</div>
	);
};

const mapStateToProps = (state: ReduxState) => {
	return {
		redux: state,
	};
};

export default connect(mapStateToProps)(App);
