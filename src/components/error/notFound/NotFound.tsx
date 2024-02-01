import { Link } from "react-router-dom";
import "./NotFound.css";

import { NOTFOUND_QUERY } from "../../../graphql/queries";
import { useContentful } from "../../../Hooks/useContentful";

import LoadingScreen from "../../loadingScreen/LoadingScreen";

function NotFound() {
	const [{ error }, loading] = useContentful(NOTFOUND_QUERY);

	return (
		<>
			{loading ? (
				<LoadingScreen />
			) : (
				<section className="section not-found">
					<section className="error">
						<h2 className="animate-titles">{error.errorNumber}</h2>
						<h3>{error.title}</h3>
					</section>

					<img className="img" src={error.image.src} alt="" />
					<p>{error.description}</p>
					<Link className="button" to="/">
						{error.buttonText}
					</Link>
				</section>
			)}
		</>
	);
}

export default NotFound;
