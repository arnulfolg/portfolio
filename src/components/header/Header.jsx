import React from "react";
import "./Header.css";
import DarkModeButton from "../DarkModeButton/DarkModeButton";
import ToggleLanguageButton from "../ToggleLanguageButton/ToggleLanguageButton";


function Header({ title, tagline }) {

	return (
		<header className="header">
			<section className="titles">
				<a href="/">
					<h1>{title}</h1>
				</a>
				<p className="subtitle">{tagline}</p>
			</section>
			<ul className="controls">
				<li>
					<DarkModeButton />
				</li>
				<li>
					<ToggleLanguageButton />
				</li>
			</ul>
		</header>
	);
}

export default Header;
