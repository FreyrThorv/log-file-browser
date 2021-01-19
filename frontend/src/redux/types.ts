export interface ReduxState {
	logs: LogItem[];
	infoCount: number;
	warningCount: number;
	errorCount: number;
	total: number;
	page: number;
}

interface LogItem {
	datetime: string;
	severity: "INFO" | "WARNING" | "ERROR";
	message: string;
}
