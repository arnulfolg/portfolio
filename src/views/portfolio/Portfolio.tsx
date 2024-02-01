import { useEffect } from "react";
import "./Portfolio.css";
import PortfolioCard from "./PortfolioCard";
import LoadingScreen from "../../components/loadingScreen/LoadingScreen";

import { useContentful } from "../../Hooks/useContentful";
import { PORTFOLIO_QUERY } from "../../graphql/queries";

interface ProjectInterface {
	sys: {
		id: string;
	};
	tumbnail: {
		url: string;
	};
	projectName: string;
}

function Portfolio() {
	const [content, loading] = useContentful(PORTFOLIO_QUERY);

	useEffect(() => {
		window.scrollTo(0, 0);
	}, []);

	return (
		<>
			{loading ? (
				<LoadingScreen screen={false} minHeight="3" times={4} />
			) : (
				<>
					<header>
						<h1>{content.portfolio.heading}</h1>
					</header>
					<section className="section section_left">
						<section className="section_cols-2">
							{content.portfolioCollection.items.map(
								(project: ProjectInterface) => {
									return (
										<PortfolioCard
											key={project.sys.id}
											image={project.tumbnail.url}
											project={project.projectName}
											link={project.sys.id}
										/>
									);
								}
							)}
						</section>
					</section>
				</>
			)}
		</>
	);
}

export default Portfolio;
