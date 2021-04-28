import React, { useState, useCallback } from "react";
import { useParams } from "react-router-dom";
import ReactMarkdown from "react-markdown";
import Gallery from "react-photo-gallery";
import Lightbox from "./../../components/lightbox/Lightbox";
import LoadingScreen from "./../../components/loadingScreen/LoadingScreen";

import { useContentful } from "../../Hooks/useContentful";
import { PROJECT_QUERY } from "../../graphql/queries";

function Project() {
	let { project } = useParams();
	const [
		{
			portfolio,
			summary,
			client,
			role,
			ia,
			gallery,
			time,
			description,
			takeaway,
		},
		loading,
	] = useContentful(PROJECT_QUERY, project);

	const [currentImage, setCurrentImage] = useState("");
	const [isLightboxOpen, setLightboxOpen] = useState(false);

	const openLightbox = useCallback((e, { photo }) => {
		setCurrentImage(photo.src);
		setLightboxOpen(true);
	}, []);

	const closeLightbox = () => {
		setCurrentImage("");
		setLightboxOpen(false);
	};

	return (
		<>
			{loading ? (
				<LoadingScreen />
			) : (
				<article>
					<header className="">
						<h1>{portfolio.projectName}</h1>
						<section className="section summary">
							<section className="summary_info summary_info__left">
								<p className="summary_title">
									{client.heading}
								</p>
								<p>{portfolio.client}</p>
							</section>
							<section className="summary_info">
								<p className="summary_title">{role.heading}</p>
								<p>{portfolio.role}</p>
							</section>
							<section className="summary_info summary_info__right">
								<p className="summary_title">{time.heading}</p>
								<p>{portfolio.time}</p>
							</section>
						</section>
					</header>
					<section className="section section_left">
						<h2>{summary.heading}</h2>
						<ReactMarkdown children={portfolio.summary} />
						{!loading ? (
							<Gallery
								photos={[{ ...portfolio.summaryPicture }]}
								onClick={openLightbox}
							/>
						) : null}
					</section>
					<section className="section section_left">
						<h2>{ia.heading}</h2>
						{!loading ? (
							<Gallery
								photos={[{ ...portfolio.iaPicture }]}
								onClick={openLightbox}
							/>
						) : null}
					</section>
					<section className="section section_left">
						<h2>{description.heading}</h2>
						<ReactMarkdown children={portfolio.description} />
					</section>
					<section className="section section_left">
						<h2>{gallery.heading}</h2>
						{!loading ? (
							<Gallery
								photos={portfolio.galleryCollection.items.map(
									(photo) => {
										return {
											...photo,
										};
									}
								)}
								onClick={openLightbox}
							/>
						) : null}
					</section>
					<footer>
						<section className="section section_left">
							<h2>{takeaway.heading}</h2>
							<ReactMarkdown children={portfolio.takeaway} />
						</section>
					</footer>

					{isLightboxOpen ? (
						<Lightbox
							open={isLightboxOpen}
							close={closeLightbox}
							image={currentImage}
						/>
					) : null}
				</article>
			)}
		</>
	);
}

export default Project;
