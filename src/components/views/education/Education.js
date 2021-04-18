import React from "react";
import "./Education.css";

import { useContentful } from "./../../../Hooks/useContentful";
import { gql } from "@apollo/client";

const GQL_QUERY = gql`
	query getCerts($language: String!) {
		degreeCollection(locale: $language) {
			items {
				sys {
					id
				}
				title
				date
				subtitle
				image {
					url
				}
			}
		}
		educationCollection(locale: $language) {
			items {
				sys {
					id
				}
				title
				date
				subtitle
				image {
					url
				}
			}
		}
	}
`;

function Education() {
	const [content, ,] = useContentful(GQL_QUERY);

	return (
		<>
			<header>
				<h1>Education and Certifications</h1>
			</header>
			<section className="section section_left">
				<header>
					<h2>Education</h2>
				</header>
				{content?.degreeCollection?.items.map((degree) => {
					return (
						<section
							key={degree.sys.id}
							className="education_section"
						>
							<img src={degree.image.url} alt="" />
							<section>
								<h3>
									{degree.title}&nbsp;
									<time>({degree.date})</time>
								</h3>
								<p>{degree.subtitle}</p>
							</section>
						</section>
					);
				})}
			</section>
			<section className="section section_left">
				<header>
					<h2>Certifications</h2>
				</header>
				{content?.educationCollection?.items.map((cert) => {
					return (
						<section
							key={cert.sys.id}
							className="education_section"
						>
							<img src={cert.image.url} alt="" className="img" />
							<section>
								<h3>
									{cert.title}&nbsp;
									<time>({cert.date})</time>
								</h3>
								<p>{cert.subtitle}</p>
							</section>
						</section>
					);
				})}
			</section>
		</>
	);
}

export default Education;
