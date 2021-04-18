import React from "react";

function About({ content }) {
	return (
		<section className="section">
			<h2>{content?.items[0].title}</h2>
			<p>{content?.items[0].description}</p>
		</section>
	);
}

export default About;
