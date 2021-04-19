import React from "react";
import "./ResumeWidget.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFilePdf } from "@fortawesome/free-solid-svg-icons";

import { useContentful } from "./../../../Hooks/useContentful";
import { RESUME_QUERY } from "./../../../graphql/queries";

function ResumeWidget() {
	const [content, loading] = useContentful(RESUME_QUERY);

	return (
		<>
			{loading ? (
				<p>Loading...</p>
			) : (
				<a
					className="download_resume"
					target="_blank"
					rel="noopener noreferrer"
					href={content.asset.url}
				>
					<FontAwesomeIcon icon={faFilePdf} />
					<p>{content.asset.title}</p>
				</a>
			)}
		</>
	);
}

export default ResumeWidget;
