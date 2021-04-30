import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import "./App.css";
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import Home from "./views/home/Home";
import Education from "./views/education/Education";
import Portfolio from "./views/portfolio/Portfolio";
import Project from "./views/project/Project";
import LoadingScreen from "./components/loadingScreen/LoadingScreen";

import ResumeWidget from "./components/widgets/resumeWidget/ResumeWidget";
import { useContentful } from "./Hooks/useContentful";
import { HEADER_QUERY } from "./graphql/queries";

function App() {
	const [content, loading] = useContentful(HEADER_QUERY);

	return (
		<Router>
			<section className="App">
				{loading ? (
					<LoadingScreen screen={true} />
				) : (
					<>
						<Header
							title={content.cvTitle.title}
							tagline={content.cvTitle.tagline}
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
						<Footer />
					</>
				)}
			</section>
		</Router>
	);
}

export default App;
