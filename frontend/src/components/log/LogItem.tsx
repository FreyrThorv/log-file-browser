import React, { FC } from "react";

type LogItemsProps = {
	datetime: string;
	severity: "INFO" | "WARNING" | "ERROR";
	message: string;
};

const LogItem: FC<LogItemsProps> = ({ datetime, severity, message }) => {
	return (
		<div className="log-item">
			<span className="date">{datetime}</span>{" "}
			<span className={`severity-text ${severity.toLowerCase()}`}>{severity}</span> {message}
		</div>
	);
};

export default LogItem;
