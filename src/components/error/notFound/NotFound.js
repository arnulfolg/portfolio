import React from "react";
import { Link } from "react-router-dom";
import "./NotFound.css";

function NotFound() {
	return (
		<section className="section not-found">
			<section className="error">
				<h2>404</h2>
				<h3>Page Not Found</h3>
			</section>

			<img
				className="img"
				src="https://images.ctfassets.net/ui8qz5ptyq23/7E5vcWPcLqKURPPf7wbxk8/f1b902fb59a89315fc02429fa4c985bc/droids.jpg"
				alt=""
			/>
			<p>This is not the page you are looking for</p>
			<Link className="button" to="/">
				Go Home
			</Link>
		</section>
	);
}

export default NotFound;
