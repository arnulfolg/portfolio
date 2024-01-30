import React from "react";
import "./Footer.css";

function Footer() {
	// const [{ copyright, letstalk }] = useContentful(FOOTER_QUERY);

	return (
		<footer className="footer">
			<header>
				<p>copyright .heading</p>
			</header>
			<aside>
				<p> letstalk heading </p>
				<ul className="social_links">
					<li>
						<a
							href="https://www.linkedin.com/in/arnulfolg/"
							target="blank"
						>
							{/* <FontAwesomeIcon icon={faLinkedin} /> */}
						</a>
					</li>
					<li>
						<a href="https://github.com/arnulfolg" target="blank">
							{/* <FontAwesomeIcon icon={faGithub} /> */}
						</a>
					</li>
					<li>
						<a
							href="https://www.behance.net/arnulfoloredo"
							target="blank"
						>
							{/* <FontAwesomeIcon icon={faBehanceSquare} /> */}
						</a>
					</li>
					<li>
						<a
							href="https://www.flickr.com/people/arnulfolg/"
							target="blank"
						>
							{/* <FontAwesomeIcon icon={faFlickr} /> */}
						</a>
					</li>
					<li>
						<a
							href="https://www.instagram.com/arnulfo.lg/"
							target="blank"
						>
							{/* <FontAwesomeIcon icon={faInstagram} /> */}
						</a>
					</li>
					<li>
						<a href="mailto:arnulfo.lg@live.com" target="blank">
							{/* <FontAwesomeIcon icon={faEnvelopeOpenText} /> */}
						</a>
					</li>
				</ul>
			</aside>
		</footer>
	);
}

export default Footer;
