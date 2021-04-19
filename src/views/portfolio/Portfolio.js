import React from "react";
import "./Portfolio.css";
import PortfolioCard from "./PortfolioCard";

import { useContentful } from "./../../Hooks/useContentful";
import { PORTFOLIO_QUERY } from "./../../graphql/queries";

function Portfolio() {
	const [content, ,] = useContentful(PORTFOLIO_QUERY);

	return (
		<>
			<header>
				<h1>Portfolio</h1>
			</header>
			<section className="section section_left">
				<section className="section_cols-2">
					{content?.portfolioCollection?.items.map((project) => {
						return (
							<PortfolioCard
								key={project.sys.id}
								image={project.tumbnail.url}
								project={project.title}
								link={project.sys.id}
							/>
						);
					})}
				</section>
			</section>
		</>
	);
}

export default Portfolio;
