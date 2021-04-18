import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import "./App.css";
import Header from "./components/header/Header";
import Home from "./components/views/home/Home";
import Education from "./components/views/education/Education";
import Portfolio from "./components/views/portfolio/Portfolio";
import Project from "./components/views/project/Project";

import ResumeWidget from "./components/widgets/resumeWidget/ResumeWidget";

function App() {
	return (
		<Router>
			<section className="App">
				<Header></Header>
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
