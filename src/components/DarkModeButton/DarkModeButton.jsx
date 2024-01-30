import React, { useState } from "react";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faSun, faMoon } from "@fortawesome/free-solid-svg-icons";
// import ThemeContext from "../../ThemeContext";

// import { useContentful } from "../../Hooks/useContentful";
// import { THEME_QUERY } from "../../graphql/queries";

function DarkModeButton() {
	// const { gettheme, toggleTheme } = useContext(ThemeContext);

	const [themeIcon, setthemeIcon] = useState();
	// const [{ dark, light }, loading] = useContentful(THEME_QUERY);

	const toggleThemeButton = () => {
		
	};
	return (
		<button
			className="toggleButton dark:outline-white"
			onClick={toggleThemeButton}
		>
			{/* <FontAwesomeIcon icon={themeIcon} /> */}
			<span>Light</span>
		</button>
	);
}

export default DarkModeButton;
