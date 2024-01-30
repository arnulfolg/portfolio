import React from "react";

function EducationCard({ info }) {
	return (
		<section className="education_section">
			<img
				src={info.image.url + "?fl=progressive&w=200"}
				alt=""
				loading="lazy"
			/>
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
