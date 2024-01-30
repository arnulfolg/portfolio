import { Link } from "react-router-dom";
import "./ErrorPage.css";

import { ERRORPAGE_QUERY } from "../../../graphql/queries";
import { useContentful } from "../../../Hooks/useContentful";

import LoadingScreen from "../../loadingScreen/LoadingScreen";

function ErrorPage() {
	const [{ error }, loading] = useContentful(ERRORPAGE_QUERY);

	return (
		<>
			{loading ? (
				<LoadingScreen />
			) : (
				<section className="section error_page">
					<h2>{error.title}</h2>
					<p>{error.description}</p>
					<img className="img" src={error.image.src} alt="" />
					<Link className="button" to="/portfolio">
						{error.buttonText}
					</Link>
				</section>
			)}
		</>
	);
}

export default ErrorPage;
