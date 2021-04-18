import React from "react";
import { useParams } from "react-router-dom";

import { useContentful } from "./../../../Hooks/useContentful";
import { PROJECT_QUERY } from "./../../../graphql/queries";

function Project() {
	let { project } = useParams();
	const [content, ,] = useContentful(PROJECT_QUERY, project);

	return (
		<>
			<header>
				<h1>{content?.portfolio?.title}</h1>
			</header>
			<section className="section section_left">
				<p>{content?.portfolio?.content}</p>
			</section>
		</>
	);
}

export default Project;
