import React from "react";
import AboutWidget from "./../../components/widgets/aboutWidget/AboutWidget";
import SkillsWidget from "./../../components/widgets/skillsWidget/SkillsWidget";
import PortfolioWidget from "./../../components/widgets/portfolioWidget/PortfolioWidget";
import EducationWidget from "./../../components/widgets/educationWidget/EducationWidget";
import ResumeWidget from "./../../components/widgets/resumeWidget/ResumeWidget";
import { useContentful } from "./../../Hooks/useContentful";
import { HOME_QUERY } from "./../../graphql/queries";

function Home() {
	const [content, ,] = useContentful(HOME_QUERY);

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
