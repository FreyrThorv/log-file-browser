import React, { FC } from "react";
import { connect, useDispatch } from "react-redux";
import { ReduxState } from "../../../redux/types";
import { updateLogInfo } from "../../../redux";

type PaginationType = {
	redux: ReduxState;
};

const Pagination: FC<PaginationType> = ({ redux }) => {
	const dispatch = useDispatch();
	const { page, total } = redux;
	const pageNum = Math.ceil(total / 100);

	const changePageNumber = (changeBy: number) => {
		const newPageNum = page + changeBy;
		// Make sure we don't go out of bounds.
		if (newPageNum > 0 && newPageNum < pageNum + 1) {
			dispatch(updateLogInfo({ page: newPageNum }));
		}
	};

	return (
		<div className="pagination">
			<p>
				{page} out of {pageNum} pages
			</p>
			<div>
				{page !== 1 && <button onClick={() => changePageNumber(-1)}>back</button>}
				{page !== pageNum && <button onClick={() => changePageNumber(1)}>next</button>}
			</div>
		</div>
	);
};

const mapStateToProps = (state: ReduxState) => {
	return {
		redux: state,
	};
};

export default connect(mapStateToProps)(Pagination);
