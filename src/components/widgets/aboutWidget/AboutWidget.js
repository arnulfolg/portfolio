import React from "react";

function About({ content, titles }) {
	return (
		<section className="section">
			<h2>{titles?.heading}</h2>
			<p>{content?.items[0].description}</p>
		</section>
	);
}

export default About;
