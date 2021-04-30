import React, { useState, useContext } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLanguage, faSun, faMoon } from "@fortawesome/free-solid-svg-icons";
import ThemeContext from "./../../ThemeContext";

function DarkModeButton() {
	const { gettheme, toggleTheme, toggleLocale } = useContext(ThemeContext);

	const [themeIcon, setthemeIcon] = useState(faMoon);

	const toggleThemeButton = () => {
		themeIcon === faSun ? setthemeIcon(faMoon) : setthemeIcon(faSun);
		toggleTheme();
	};
	return (
		<button
			className="toggleButton dark:outline-white"
			onClick={toggleThemeButton}
		>
			<FontAwesomeIcon icon={themeIcon} />
			<span>{gettheme === "Light" ? "Dark" : "Light"} Mode</span>
		</button>
	);
}

export default DarkModeButton;
