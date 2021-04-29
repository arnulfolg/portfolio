import React from "react";
import { Link } from "react-router-dom";

function EducationWidget({ content, titles, link }) {
	return (
		<section className="section">
			<header>
				<h2>{titles.heading}</h2>
			</header>
			<section className="section_cols-3">
				{content.items.map((education, index) => {
					return (
						<section key={index} className="education_card">
							<img
								className="img"
								src={education.image.url}
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
