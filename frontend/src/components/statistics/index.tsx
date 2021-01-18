import React, { FC } from "react";
import "./statistics.css";
import { connect } from "react-redux";
import { ReduxState } from "../../redux/types";

type StatisticsProps = {
	redux: ReduxState;
};

const Statistics: FC<StatisticsProps> = ({ redux }) => {
	const { infoCount, warningCount, errorCount, total } = redux;
	return (
		<div>
			<h2>Statistics</h2>
			<p>Info: {infoCount}</p>
			<p>Warnings: {warningCount}</p>
			<p>Errors: {errorCount}</p>
			<p>Total: {total}</p>
		</div>
	);
};

const mapStateToProps = (state: ReduxState) => {
	return {
		redux: state,
	};
};

export default connect(mapStateToProps)(Statistics);
