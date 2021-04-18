import React from "react";
import AboutWidget from "./../../widgets/aboutWidget/AboutWidget";
import SkillsWidget from "./../../widgets/skillsWidget/SkillsWidget";
import PortfolioWidget from "./../../widgets/portfolioWidget/PortfolioWidget";
import EducationWidget from "./../../widgets/educationWidget/EducationWidget";
import ResumeWidget from "./../../widgets/resumeWidget/ResumeWidget";

function Home() {
	return (
		<>
			<AboutWidget />
			<SkillsWidget />
			<PortfolioWidget />
			<EducationWidget />
			<ResumeWidget />
		</>
	);
}

export default Home;
