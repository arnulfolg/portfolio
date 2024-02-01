import "./Header.css";

import { Link, useLocation } from "react-router-dom";

import DarkModeButton from "./DarkModeButton";
import ToggleLanguageButton from "./ToggleLanguageButton";

interface HeaderInterface {
	title: string;
	tagline: string;
}

function Header({ title, tagline }: HeaderInterface) {
	let location = useLocation();

	return (
		<header
			className={
				location.pathname != "/" ? "header header_compact" : "header"
			}
		>
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
