import { useState, useEffect } from "react";
import axios from "axios";

const usePoll = (url: string, fetchNumber: number) => {
	const [response, setResponse] = useState<any>(null);

	useEffect(() => {
		setResponse(null);
		axios
			.get(url)
			.then((response) => {
				setResponse(response.data);
			})
			.catch((error) => {
				console.error(error.message);
			});
	}, [url, fetchNumber]);

	return [response];
};

export default usePoll;
