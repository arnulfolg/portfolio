import { useQuery } from "@apollo/client";

const language = "en-US";

export const useContentful = (QUERY, id) => {
	const { loading, error, data } = useQuery(QUERY, {
		variables: { language, id },
	});
	const content = data ? data : [];
	console.log("content", content);

	return [content, loading, error];
};
