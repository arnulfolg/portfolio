import { ApolloClient, InMemoryCache } from "@apollo/client";

const SPACE_TOKEN: string = import.meta.env.VITE_REACT_APP_SPACE_ID;
const CAD_TOKEN: string = import.meta.env.VITE_REACT_APP_CAD_TOKEN;

const URI: string = `https://graphql.contentful.com/content/v1/spaces/${SPACE_TOKEN}/environments/master`;

export const CLIENT = new ApolloClient({
	cache: new InMemoryCache(),
	uri: URI,
	headers: {
		Authorization: `Bearer ${CAD_TOKEN}`,
	},
});
