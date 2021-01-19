import { ReduxState } from "./types";
const UPDATE_LOG_INFO = "UPDATE_LOG_INFO";
const UPDATE_PAGE_NUMBER = "UPDATE_PAGE_NUMBER";

const initialState: ReduxState = {
	logs: [],
	infoCount: 0,
	warningCount: 0,
	errorCount: 0,
	total: 0,
	page: 1,
};

export const reducer = (state = initialState, action: { type: string; params: any }) => {
	switch (action.type) {
		case UPDATE_LOG_INFO:
			return Object.assign({}, state, {
				...action.params,
			});
		case UPDATE_PAGE_NUMBER:
			return Object.assign({}, state, {
				page: action.params.page,
			});

		default:
			return state;
	}
};

export const updateLogInfo = (params: any) => ({
	type: UPDATE_LOG_INFO,
	params,
});

export const updatePageNumber = (params: { page: number }) => ({
	type: UPDATE_PAGE_NUMBER,
	params,
});
