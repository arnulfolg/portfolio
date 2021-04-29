import React, { useEffect } from "react";
import "./Education.css";

import LoadingScreen from "./../../components/loadingScreen/LoadingScreen";
import EducationCard from "./EducationCard";

import { useContentful } from "./../../Hooks/useContentful";
import { EDUCATION_QUERY } from "./../../graphql/queries";

function Education() {
	const [content, loading] = useContentful(EDUCATION_QUERY);

	useEffect(() => {
		window.scrollTo(0, 0);
	}, []);

	return (
		<>
			{loading ? (
				<LoadingScreen screen={false} minHeight="2" times={3} />
			) : (
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
								<EducationCard
									key={degree.sys.id}
									info={degree}
								/>
							);
						})}
					</section>
					<section className="section section_left">
						<header>
							<h2>Certifications</h2>
						</header>
						{content?.educationCollection?.items.map((cert) => {
							return (
								<EducationCard key={cert.sys.id} info={cert} />
							);
						})}
					</section>
				</>
			)}
		</>
	);
}

export default Education;
