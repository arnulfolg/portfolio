import { BrowserRouter, Routes, Route } from "react-router-dom";

import "./App.css";
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import Home from "./views/home/Home";
import Education from "./views/education/Education";
import Portfolio from "./views/portfolio/Portfolio";
import Project from "./views/project/Project";
import LoadingScreen from "./components/loadingScreen/LoadingScreen";
import NotFound from "./components/error/notFound/NotFound";

import ResumeWidget from "./components/widgets/resumeWidget/ResumeWidget";
import { useContentful } from "./Hooks/useContentful";
import { HEADER_QUERY } from "./graphql/queries";

function App() {
	const [content, loading] = useContentful(HEADER_QUERY);

	return (
		<BrowserRouter>
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
							<Routes>
								<Route path="/" element={<Home />} />
								<Route
									path="/education"
									element={<Education />}
								/>
								<Route
									path="/portfolio/:project"
									element={
										<>
											<Project />
											<ResumeWidget />
										</>
									}
								/>
								<Route
									path="/portfolio"
									element={
										<>
											<Portfolio />
											<ResumeWidget />
										</>
									}
								/>
								<Route path="*" element={<NotFound />} />
							</Routes>
						</main>
						<Footer />
					</>
				)}
			</section>
		</BrowserRouter>
	);
}

export default App;
