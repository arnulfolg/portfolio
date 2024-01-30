import React from "react";
import "./LoadingScreen.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSpinner } from "@fortawesome/free-solid-svg-icons";

function LoadingScreen({ screen, minHeight, times }) {
	return (
		<>
			{screen ? (
				<section className="loading_screen">
					<FontAwesomeIcon icon={faSpinner} spin />
				</section>
			) : (
				[...Array(times)].map((i, index) => {
					return (
						<section
							key={index}
							className={`loading_component ${
								minHeight ? "loading_component__small" : ""
							}`}
							style={{ minHeight: minHeight }}
						></section>
					);
				})
			)}
		</>
	);
}

export default LoadingScreen;
