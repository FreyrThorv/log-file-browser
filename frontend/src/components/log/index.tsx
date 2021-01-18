import React, { FC } from "react";
import { connect } from "react-redux";
import { ReduxState } from "../../redux/types";
import "./log.css";

type LogProps = {
	redux: ReduxState;
};

const Log: FC<LogProps> = ({ redux }) => {
	const { logs } = redux;

	return (
		<div className="log">
			<h2>Log file: </h2>
			{JSON.stringify(logs)}
		</div>
	);
};

const mapStateToProps = (state: ReduxState) => {
	return {
		redux: state,
	};
};

export default connect(mapStateToProps)(Log);
