import React from "react";
import { Link } from "react-router-dom";

function NotFound() {
	return (
		<section>
			<h2>404</h2>
			<h3>Page Not Found</h3>
			<p>This is not the page you are looking for</p>
			<Link to="/">Go Home</Link>
		</section>
	);
}

export default NotFound;
