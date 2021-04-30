import { useContext } from "react";
import { useQuery } from "@apollo/client";
import ThemeContext from "./../ThemeContext";

export const useContentful = (QUERY, id) => {
	const { getlocale } = useContext(ThemeContext);
	const { loading, error, data } = useQuery(QUERY, {
		variables: { language: getlocale, id },
	});

	const content = data ? data : [];

	return [content, loading, error];
};
