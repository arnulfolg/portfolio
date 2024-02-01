import { useEffect } from "react";
import "./Education.css";

import LoadingScreen from "../../components/loadingScreen/LoadingScreen";
import EducationCard from "./EducationCard";

import { useContentful } from "../../Hooks/useContentful";
import { EDUCATION_QUERY } from "../../graphql/queries";

interface EducationInterface {
	sys: {
		id: string;
	};
	title: string;
	date: string;
	subtitle: string;
	image?: {
		url: string;
		alt?: string;
	};
}

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
						<h1>{content.educationPage.heading}</h1>
					</header>
					<section className="section section_left">
						<header>
							<h2 className="animate-titles">
								{content.education.heading}
							</h2>
						</header>
						{content?.degreeCollection?.items.map(
							(degree: EducationInterface) => {
								return (
									<EducationCard
										key={degree.sys.id}
										info={degree}
									/>
								);
							}
						)}
					</section>
					<section className="section section_left">
						<header>
							<h2 className="animate-titles">
								{content.certification.heading}
							</h2>
						</header>
						{content?.educationCollection?.items.map(
							(cert: EducationInterface) => {
								return (
									<EducationCard
										key={cert.sys.id}
										info={cert}
									/>
								);
							}
						)}
					</section>
				</>
			)}
		</>
	);
}

export default Education;
