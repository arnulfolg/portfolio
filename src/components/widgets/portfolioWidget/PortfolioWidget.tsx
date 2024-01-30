import { Link } from "react-router-dom";
import PortfolioCard from "../../../views/portfolio/PortfolioCard";

interface PortfolioWidgetInterface {
	content: {
		items: {
			tumbnail: {
				url: string;
			}
			sys: {
				id: string;
			}
			projectName: string;
		}[]
	}
	titles: {
		heading: string;
	}
	link: {
		heading: string;
	}
}

function PortfolioWidget({ content, titles, link }: PortfolioWidgetInterface) {
	return (
		<section className="section">
			<header>
				<h2>{titles.heading}</h2>
			</header>
			<section className="section_cols-2">
				{content.items.map((project) => {
					return (
						<PortfolioCard
							key={project.sys.id}
							image={project.tumbnail.url}
							project={project.projectName}
							link={project.sys.id}
						/>
					);
				})}
			</section>
			<footer>
				<Link to="/portfolio">{link.heading}</Link>
			</footer>
		</section>
	);
}

export default PortfolioWidget;
