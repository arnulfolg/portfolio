import { Link } from "react-router-dom";

interface EdicationWidgetInterface {
	content: {
		items: {
			image: {
				url: string;
			};
			subtitle: string;
		}[];
	};
	titles: {
		heading: string;
	};
	link: {
		heading: string;
	};
}

function EducationWidget({ content, titles, link }: EdicationWidgetInterface) {
	return (
		<section className="section">
			<header>
				<h2 className="animate-titles">{titles.heading}</h2>
			</header>
			<section className="section_cols-3">
				{content.items.map((education, index) => {
					return (
						<section key={index} className="education_card">
							<img
								className="img"
								src={
									education.image.url +
									"?fl=progressive&w=200"
								}
								alt=""
							/>
							<p className="title">{education.subtitle}</p>
						</section>
					);
				})}
			</section>
			<footer>
				<Link to="/education">{link.heading}</Link>
			</footer>
		</section>
	);
}

export default EducationWidget;
