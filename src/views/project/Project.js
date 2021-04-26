import React, { useState, useCallback } from "react";
import { useParams } from "react-router-dom";
import ReactMarkdown from "react-markdown";
import Gallery from "react-photo-gallery";
import Lightbox from "./../../components/lightbox/Lightbox";

import { useContentful } from "../../Hooks/useContentful";
import { PROJECT_QUERY } from "../../graphql/queries";

function Project() {
	let { project } = useParams();
	const [content, loading] = useContentful(PROJECT_QUERY, project);

	const photos = content?.portfolio?.galleryCollection?.items.map((item) => {
		return { ...item, width: item.width, height: item.height };
	});

	const [currentImage, setCurrentImage] = useState("");
	const [viewerIsOpen, setViewerIsOpen] = useState(false);

	const openLightbox = useCallback((event, { photo, index }) => {
		setCurrentImage(photo.src);
		setViewerIsOpen(true);
	}, []);

	const closeLightbox = () => {
		setCurrentImage("");
		setViewerIsOpen(false);
	};

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
				{!loading ? (
					<Gallery
						photos={[
							{
								...content?.portfolio?.summaryPicture,
							},
						]}
						onClick={openLightbox}
					/>
				) : null}
			</section>
			<section className="section section_left">
				<h2>{content?.ia?.heading}</h2>
				{!loading ? (
					<Gallery
						photos={[
							{
								...content?.portfolio?.iaPicture,
							},
						]}
						onClick={openLightbox}
					/>
				) : null}
			</section>
			<section className="section section_left">
				<h2>{content?.description?.heading}</h2>
				<ReactMarkdown children={content?.portfolio?.description} />
			</section>
			<section className="section section_left">
				<h2>{content?.gallery?.heading}</h2>
				{!loading ? (
					<Gallery photos={photos} onClick={openLightbox} />
				) : null}
			</section>
			<footer>
				<section className="section section_left">
					<h2>{content?.takeaway?.heading}</h2>
					<ReactMarkdown children={content?.portfolio?.takeaway} />
				</section>
			</footer>

			{viewerIsOpen ? (
				<Lightbox
					open={viewerIsOpen}
					close={closeLightbox}
					image={currentImage}
				/>
			) : null}
		</>
	);
}

export default Project;
