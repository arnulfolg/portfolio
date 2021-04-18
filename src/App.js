import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import "./App.css";
import Header from "./components/header/Header";
import Home from "./components/views/home/Home";
import Education from "./components/views/education/Education";
import Portfolio from "./components/views/portfolio/Portfolio";
import Project from "./components/views/project/Project";

import ResumeWidget from "./components/widgets/resumeWidget/ResumeWidget";
import { useContentful } from "./Hooks/useContentful";
import { gql } from "@apollo/client";

const GQL_QUERY = gql`
	query getTitles($language: String!) {
		cvTitle(id: "3Z2C9DB5pyBAxNBkXqyBSz", locale: $language) {
			title
			tagline
		}
	}
`;

function App() {
	const [content, ,] = useContentful(GQL_QUERY);

	return (
		<Router>
			<section className="App">
				<Header
					title={content?.cvTitle?.title}
					tagline={content?.cvTitle?.tagline}
				/>
				<main className="main">
					<Switch>
						<Route path="/education">
							<Education />
						</Route>
						<Route path="/portfolio/:project">
							<Project />
							<ResumeWidget />
						</Route>
						<Route path="/portfolio">
							<Portfolio />
							<ResumeWidget />
						</Route>
						<Route path="/">
							<Home />
						</Route>
					</Switch>
				</main>
			</section>
		</Router>
	);
}

export default App;