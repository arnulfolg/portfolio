import React from "react";
import { useParams } from "react-router-dom";

import { useContentful } from "./../../../Hooks/useContentful";
import { gql } from "@apollo/client";

const GQL_QUERY = gql`
	query getCerts($id: String!, $language: String!) {
		portfolio(id: $id, locale: $language) {
			sys {
				id
			}
			title
			content
			tumbnail {
				url
			}
		}
	}
`;

function Project() {
	let { project } = useParams();
	const [content, ,] = useContentful(GQL_QUERY, project);

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
