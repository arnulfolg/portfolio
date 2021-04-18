import React from "react";
import AboutWidget from "./../../widgets/aboutWidget/AboutWidget";
import SkillsWidget from "./../../widgets/skillsWidget/SkillsWidget";
import PortfolioWidget from "./../../widgets/portfolioWidget/PortfolioWidget";
import EducationWidget from "./../../widgets/educationWidget/EducationWidget";
import ResumeWidget from "./../../widgets/resumeWidget/ResumeWidget";
import { useContentful } from "./../../../Hooks/useContentful";
import { gql } from "@apollo/client";

const GQL_QUERY = gql`
	query GetHomeInfo($language: String!) {
		aboutMeCollection(locale: $language) {
			items {
				title
				description
			}
		}
		skillsCollection {
			items {
				sys {
					id
				}
				title
				skillList
			}
		}
		portfolioCollection(locale: $language, limit: 2) {
			items {
				sys {
					id
				}
				title
				tumbnail {
					url
				}
			}
		}
		educationCollection(locale: $language, limit: 3) {
			items {
				subtitle
				image {
					url
				}
			}
		}
	}
`;

function Home() {
	const [content, ,] = useContentful(GQL_QUERY);

	return (
		<>
			<AboutWidget content={content.aboutMeCollection} />
			<SkillsWidget content={content.skillsCollection} />
			<PortfolioWidget content={content.portfolioCollection} />
			<EducationWidget content={content.educationCollection} />
			<ResumeWidget />
		</>
	);
}

export default Home;
