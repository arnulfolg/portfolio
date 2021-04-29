import React from "react";
import "./LoadingScreen.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSpinner } from "@fortawesome/free-solid-svg-icons";

function LoadingScreen({ screen }) {
	return (
		<>
			{screen ? (
				<section className="loading_screen">
					<FontAwesomeIcon icon={faSpinner} spin />
				</section>
			) : (
				<section className="loading_component"></section>
			)}
		</>
	);
}

export default LoadingScreen;
