import { Link } from "react-router-dom";

interface PortfolioCardInterface {
	image: string;
	project: string;
	link: string;
}

function PortfolioCard({ image, project, link }: PortfolioCardInterface) {
	return (
		<Link className="portfolio_card" to={`/portfolio/${link}`}>
			<img className="img" src={image} alt="" loading="lazy" />
			<p className="title">{project}</p>
		</Link>
	);
}

export default PortfolioCard;
