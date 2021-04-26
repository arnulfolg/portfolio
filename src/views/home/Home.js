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
			<AboutWidget
				content={content.aboutMeCollection}
				titles={content.about}
			/>
			<SkillsWidget
				content={content.skillsCollection}
				titles={content.skills}
			/>
			<PortfolioWidget
				content={content.portfolioCollection}
				titles={content.portfolio}
			/>
			<EducationWidget
				content={content.educationCollection}
				titles={content.education}
			/>
			<ResumeWidget />
		</>
	);
}

export default Home;
