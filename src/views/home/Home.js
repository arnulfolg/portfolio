import React from "react";
import AboutWidget from "./../../components/widgets/aboutWidget/AboutWidget";
import SkillsWidget from "./../../components/widgets/skillsWidget/SkillsWidget";
import PortfolioWidget from "./../../components/widgets/portfolioWidget/PortfolioWidget";
import EducationWidget from "./../../components/widgets/educationWidget/EducationWidget";
import ResumeWidget from "./../../components/widgets/resumeWidget/ResumeWidget";
import LoadingScreen from "./../../components/loadingScreen/LoadingScreen";
import { useContentful } from "./../../Hooks/useContentful";
import { HOME_QUERY } from "./../../graphql/queries";

function Home() {
	const [content, loading] = useContentful(HOME_QUERY);

	return (
		<>
			{loading ? (
				<LoadingScreen screen={false} />
			) : (
				<AboutWidget
					content={content.aboutMeCollection}
					titles={content.about}
				/>
			)}
			{loading ? (
				<LoadingScreen screen={false} />
			) : (
				<SkillsWidget
					content={content.skillsCollection}
					titles={content.skills}
				/>
			)}
			{loading ? (
				<LoadingScreen screen={false} />
			) : (
				<PortfolioWidget
					content={content.portfolioCollection}
					titles={content.portfolio}
				/>
			)}
			{loading ? (
				<LoadingScreen screen={false} />
			) : (
				<EducationWidget
					content={content.educationCollection}
					titles={content.education}
				/>
			)}
			<ResumeWidget />
		</>
	);
}

export default Home;
