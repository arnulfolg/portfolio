import React from "react";

function EducationCard({ info }) {
	return (
		<section className="education_section">
			<img src={info.image.url} alt="" />
			<section>
				<h3>
					{info.title}&nbsp;
					<time>({info.date})</time>
				</h3>
				<p>{info.subtitle}</p>
			</section>
		</section>
	);
}

export default EducationCard;
