interface AboutInterface {
	content: {
		items: {
			description: string;
		}[]
	}
	titles: {
		heading: string;
	}
}

function About({ content, titles }: AboutInterface) {
	return (
		<section className="section">
			<h2>{titles.heading}</h2>
			<p>{content.items[0].description}</p>
		</section>
	);
}

export default About;
