import React, { useState, useContext } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLanguage, faSun, faMoon } from "@fortawesome/free-solid-svg-icons";
import ThemeContext from "./../../ThemeContext";

function ToggleLanguageButton() {
	const { gettheme, toggleTheme, toggleLocale } = useContext(ThemeContext);

	const [getlanguate, setlanguate] = useState("Español");

	const toggleLanguage = () => {
		getlanguate === "Español"
			? setlanguate("English")
			: setlanguate("Español");
		toggleLocale();
	};

	return (
		<button
			className="toggleButton dark:outline-white"
			onClick={toggleLanguage}
		>
			<FontAwesomeIcon icon={faLanguage} />
			<span>{getlanguate}</span>
		</button>
	);
}

export default ToggleLanguageButton;
