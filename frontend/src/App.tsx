import React, { FC, useEffect } from "react";
import Statistics from "./components/statistics";
import Log from "./components/log";
import useFetch from "./hooks/useFetch";
import { useDispatch } from "react-redux";
import { updateLogInfo } from "./redux";
import { connect } from "react-redux";
import { ReduxState } from "./redux/types";
import "./App.css";

type PaginationType = {
	redux: ReduxState;
};

const App: FC<PaginationType> = ({ redux }) => {
	const { page } = redux;
	const [response, loading, error] = useFetch(`/api/logs?page=${page}`);
	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(updateLogInfo(response));
	}, [response, dispatch]);

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
