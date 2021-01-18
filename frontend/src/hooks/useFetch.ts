import { useState, useEffect } from "react";
import axios from "axios";

const useFetch = (url: string, requestType?: "POST" | "GET", payload?: Object) => {
	const [response, setResponse] = useState<any>(null);
	const [error, setError] = useState<null | boolean | string>(null);
	const [loading, setLoading] = useState(true);

	useEffect(() => {
		setLoading(true);
		setError(false);
		setResponse(null);

		if (!requestType || requestType === "GET") {
			axios
				.get(url)
				.then((response) => {
					setLoading(false);
					setResponse(response.data);
				})
				.catch((error) => {
					setError(error.message);
					setLoading(false);
					console.error(error.message);
				});
		} else if (requestType === "POST") {
			axios
				.post(url, payload)
				.then((response) => {
					setLoading(false);
					setResponse(response.data);
				})
				.catch((error) => {
					setError(error.message);
					setLoading(false);
					console.error(error.message);
				});
		}
	}, [url, requestType, payload]);

	return [response, loading, error];
};

export default useFetch;
