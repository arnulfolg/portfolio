import React, { useState } from "react";
import ThemeContext from "./ThemeContext";

const WithTheme = (OriginalComponent) => {
	function NewComponent() {
		const [gettheme, settheme] = useState("light");
		const [getlocale, setlocale] = useState("en-US");

		const toggleTheme = () => {
			gettheme === "light" ? settheme("dark") : settheme("light");
		};

		const toggleLocale = () => {
			getlocale === "en-US" ? setlocale("es-419") : setlocale("en-US");
		};

		return (
			<ThemeContext.Provider
				value={{
					gettheme,
					toggleTheme,
					getlocale,
					toggleLocale,
				}}
			>
				<section className={gettheme}>
					<OriginalComponent />
				</section>
			</ThemeContext.Provider>
		);
	}
	return NewComponent;
};

export default WithTheme;
