import React from "react";
import "./LoadingScreen.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSpinner } from "@fortawesome/free-solid-svg-icons";

function LoadingScreen() {
	return (
		<section className="loading_screen">
			<FontAwesomeIcon icon={faSpinner} spin />
		</section>
	);
}

export default LoadingScreen;
