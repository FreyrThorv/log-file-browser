import React, { FC } from "react";
import { connect } from "react-redux";
import { ReduxState } from "../../redux/types";
import LogItem from "./LogItem";
import "./log.css";

type LogProps = {
	redux: ReduxState;
};

const Log: FC<LogProps> = ({ redux }) => {
	const { logs } = redux;

	return (
		<div className="log">
			{logs.map(({ datetime, severity, message }, index) => {
				return <LogItem key={datetime} datetime={datetime} severity={severity} message={message} />;
			})}
		</div>
	);
};

const mapStateToProps = (state: ReduxState) => {
	return {
		redux: state,
	};
};

export default connect(mapStateToProps)(Log);
