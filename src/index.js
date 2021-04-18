import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { ApolloProvider } from "@apollo/client";
import WithTheme from "./WithTheme";
import { CLIENT } from "./Hooks/apollo";

// const CLIENT = new ApolloClient({
// 	uri:
// 		"https://graphql.contentful.com/content/v1/spaces/ui8qz5ptyq23?access_token =VRsqmQ37waPrLOGCNmmwigcY2mekXcIA9Q-08kSRDkE",
// 	cache: new InMemoryCache(),
// });

const AppWithTheme = WithTheme(App);

ReactDOM.render(
	<React.StrictMode>
		<ApolloProvider client={CLIENT}>
			<AppWithTheme />
		</ApolloProvider>
	</React.StrictMode>,
	document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
