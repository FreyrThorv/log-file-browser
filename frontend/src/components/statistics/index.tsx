import React, { FC } from "react";
import "./statistics.css";
import { connect } from "react-redux";
import { ReduxState } from "../../redux/types";
import Pagination from "./pagination";

type StatisticsProps = {
	redux: ReduxState;
};

const Statistics: FC<StatisticsProps> = ({ redux }) => {
	const { infoCount, warningCount, errorCount, total } = redux;
	return (
		<div className="stats-container">
			<div className="stats">
				<h2>Statistics</h2>
				<span>
					Info: <span className="severity-text info">{infoCount}</span>
				</span>
				<span>
					Warnings: <span className="severity-text warning">{warningCount}</span>
				</span>
				<span>
					Errors: <span className="severity-text error">{errorCount}</span>
				</span>
				<span>Total: {total}</span>
				<Pagination />
			</div>
		</div>
	);
};

const mapStateToProps = (state: ReduxState) => {
	return {
		redux: state,
	};
};

export default connect(mapStateToProps)(Statistics);
