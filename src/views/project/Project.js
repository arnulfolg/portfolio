import React from "react";
import { useParams } from "react-router-dom";
import ReactMarkdown from "react-markdown";

import { useContentful } from "../../Hooks/useContentful";
import { PROJECT_QUERY } from "../../graphql/queries";

function Project() {
	let { project } = useParams();
	const [content, ,] = useContentful(PROJECT_QUERY, project);

	return (
		<>
			<header className="">
				<h1>{content?.portfolio?.projectName}</h1>
				<section className="section summary">
					<section className="summary_info summary_info__left">
						<p className="summary_title">
							{content?.client?.heading}
						</p>
						<p>{content?.portfolio?.client}</p>
					</section>
					<section className="summary_info">
						<p className="summary_title">
							{content?.role?.heading}
						</p>
						<p>{content?.portfolio?.role}</p>
					</section>
					<section className="summary_info summary_info__right">
						<p className="summary_title">
							{content?.time?.heading}
						</p>
						<p>{content?.portfolio?.time}</p>
					</section>
				</section>
			</header>
			<section className="section section_left">
				<h2>{content?.summary?.heading}</h2>
				<ReactMarkdown children={content?.portfolio?.summary} />
				<img src={content?.portfolio?.summaryPicture.url} alt="" />
			</section>
			<section className="section section_left">
				<h2>{content?.ia?.heading}</h2>
				<img src={content?.portfolio?.iaPicture.url} alt="" />
			</section>
			<section className="section section_left">
				<h2>{content?.description?.heading}</h2>
				<ReactMarkdown children={content?.portfolio?.description} />
			</section>
			<section className="section section_left">
				<h2>{content?.gallery?.heading}</h2>
				<picture className="gallery">
					{content?.portfolio?.galleryCollection?.items?.map(
						(picture) => {
							return (
								<img
									key={picture.sys.id}
									src={picture.url}
									alt=""
								/>
							);
						}
					)}
				</picture>
			</section>
			<footer>
				<section className="section section_left">
					<h2>{content?.takeaway?.heading}</h2>
					<ReactMarkdown children={content?.portfolio?.takeaway} />
				</section>
			</footer>
		</>
	);
}

export default Project;
