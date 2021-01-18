import { ReduxState } from "./types";
const UPDATE_LOG_INFO = "UPDATE_LOG_INFO";

const initialState: ReduxState = {
	logs: [],
	infoCount: 0,
	warningCount: 0,
	errorCount: 0,
	total: 0,
};

export const reducer = (state = initialState, action: { type: string; params: any }) => {
	switch (action.type) {
		case UPDATE_LOG_INFO:
			return Object.assign({}, state, {
				...action.params,
			});

		default:
			return state;
	}
};

export const updateLogInfo = (params: any) => ({
	type: UPDATE_LOG_INFO,
	params,
});
