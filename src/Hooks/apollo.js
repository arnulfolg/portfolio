import { ApolloClient, InMemoryCache } from "@apollo/client";

const SPACE_TOKEN = process.env.REACT_APP_SPACE_ID;
const CAD_TOKEN = process.env.REACT_APP_CAD_TOKEN;

const URI = `https://graphql.contentful.com/content/v1/spaces/${SPACE_TOKEN}/environments/master`;

export const CLIENT = new ApolloClient({
	cache: new InMemoryCache(),
	uri: URI,
	headers: {
		Authorization: `Bearer ${CAD_TOKEN}`,
	},
});
