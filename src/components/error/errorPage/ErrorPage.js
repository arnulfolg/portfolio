import React from "react";
import { Link } from "react-router-dom";

function ErrorPage() {
	return (
		<section>
			<h2>Project Not Found</h2>
			<p>
				It seems the project you are looking for doesn't exist or it was
				removed
			</p>
			<Link to="/portfolio">Go to Projects</Link>
		</section>
	);
}

export default ErrorPage;
