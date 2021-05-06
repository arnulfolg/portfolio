import React from "react";
import { Link } from "react-router-dom";
import "./ErrorPage.css";

function ErrorPage() {
	return (
		<section className="section error_page">
			<h2>Project Not Found</h2>
			<p>
				It seems the project you are looking for doesn't exist or it was
				removed by our Cat Admin
			</p>
			<img
				className="img"
				src="https://images.ctfassets.net/ui8qz5ptyq23/H5uum9ifZ80EIVFAxgX1j/660429f28f88934f7811c45e5029b453/599.jpg"
				alt=""
			/>
			<Link className="button" to="/portfolio">
				Go to Projects
			</Link>
		</section>
	);
}

export default ErrorPage;
