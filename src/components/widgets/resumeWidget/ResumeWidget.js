import React from "react";
import "./ResumeWidget.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFilePdf } from "@fortawesome/free-solid-svg-icons";

function ResumeWidget() {
	return (
		<a
			className="download_resume"
			target="_blank"
			rel="noopener noreferrer"
			href="https://www.contentful.com/"
		>
			<FontAwesomeIcon icon={faFilePdf} />
			<p>Download Resume in PDF</p>
		</a>
	);
}

export default ResumeWidget;
