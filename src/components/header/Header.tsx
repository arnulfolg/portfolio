import { useState, useEffect } from "react";
import "./Header.css";

import { Link } from "react-router-dom";

import DarkModeButton from "./DarkModeButton";
import ToggleLanguageButton from "./ToggleLanguageButton";

interface HeaderInterface {
	title: string;
	tagline: string;
}

function Header({ title, tagline }: HeaderInterface) {
	const scrollHeight = 120;

	const [isShrunk, setShrunk] = useState(false);
	useEffect(() => {
		const onScroll = () => {
			setShrunk((isShrunk) => {
				if (
					!isShrunk &&
					(document.body.scrollTop > scrollHeight ||
						document.documentElement.scrollTop > scrollHeight)
				) {
					return true;
				}

				if (
					isShrunk &&
					document.body.scrollTop < scrollHeight &&
					document.documentElement.scrollTop < scrollHeight
				) {
					return false;
				}

				return isShrunk;
			});
		};

		window.addEventListener("scroll", onScroll);
		return () => window.removeEventListener("scroll", onScroll);
	}, []);

	return (
		<header className={`header ${isShrunk ? "header_small" : ""} `}>
			<section className="titles">
				<Link to="/">
					<h1>{title}</h1>
				</Link>
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
