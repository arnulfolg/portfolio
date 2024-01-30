import "./LoadingScreen.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSpinner } from "@fortawesome/free-solid-svg-icons";

interface LoadinScreenInterface {
	screen?: boolean;
	minHeight?: string;
	times?: number;
}

function LoadingScreen({ screen, minHeight, times }: LoadinScreenInterface) {
	return (
		<>
			{screen ? (
				<section className="loading_screen">
					<FontAwesomeIcon icon={faSpinner} spin />
				</section>
			) : (
				//@ts-ignore
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
