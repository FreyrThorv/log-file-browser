export interface ReduxState {
	logs: LogItem[];
	infoCount: number;
	warningCount: number;
	errorCount: number;
	total: number;
}

interface LogItem {
	datetime: string;
	severity: string;
	message: string;
}
