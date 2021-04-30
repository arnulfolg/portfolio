import React, { useState, useContext } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSun, faMoon } from "@fortawesome/free-solid-svg-icons";
import ThemeContext from "./../../ThemeContext";

import { useContentful } from "./../../Hooks/useContentful";
import { THEME_QUERY } from "./../../graphql/queries";

function DarkModeButton() {
	const { gettheme, toggleTheme } = useContext(ThemeContext);

	const [themeIcon, setthemeIcon] = useState(faMoon);
	const [{ dark, light }, loading] = useContentful(THEME_QUERY);

	const toggleThemeButton = () => {
		themeIcon === faSun ? setthemeIcon(faMoon) : setthemeIcon(faSun);
		toggleTheme();
	};
	return (
		<button
			disabled={loading}
			className="toggleButton dark:outline-white"
			onClick={toggleThemeButton}
		>
			<FontAwesomeIcon icon={themeIcon} />
			<span>{gettheme === "light" ? dark?.heading : light?.heading}</span>
		</button>
	);
}

export default DarkModeButton;
