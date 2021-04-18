import React from "react";
import { Link } from "react-router-dom";
import PortfolioCard from "./../../views/portfolio/PortfolioCard";

function PortfolioWidget({ content }) {
	return (
		<section className="section">
			<header>
				<h2>Portfolio</h2>
			</header>
			<section className="section_cols-2">
				{content?.items.map((project) => {
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
			<footer>
				<Link to="/portfolio">See all projects</Link>
			</footer>
		</section>
	);
}

export default PortfolioWidget;
