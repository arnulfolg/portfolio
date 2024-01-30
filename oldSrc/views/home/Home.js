import React from "react";
import AboutWidget from "../../components/widgets/aboutWidget/AboutWidget";
import SkillsWidget from "../../components/widgets/skillsWidget/SkillsWidget";
import PortfolioWidget from "../../components/widgets/portfolioWidget/PortfolioWidget";
import EducationWidget from "../../components/widgets/educationWidget/EducationWidget";
import ResumeWidget from "../../components/widgets/resumeWidget/ResumeWidget";
import LoadingScreen from "../../components/loadingScreen/LoadingScreen";
import { useContentful } from "../../Hooks/useContentful";
import { HOME_QUERY } from "../../graphql/queries";

function Home() {
	const [content, loading] = useContentful(HOME_QUERY);

	return (
		<>
			{loading ? (
				<LoadingScreen screen={false} minHeight="3" times={4} />
			) : (
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
						link={content.portfolioLink}
					/>
					<EducationWidget
						content={content.educationCollection}
						titles={content.education}
						link={content.educationLink}
					/>
				</>
			)}
			<ResumeWidget />
		</>
	);
}

export default Home;
