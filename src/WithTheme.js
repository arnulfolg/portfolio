import React, { useState } from "react";
import ThemeContext from "./ThemeContext";

const WithTheme = (OriginalComponent) => {
	function NewComponent() {
		const [gettheme, settheme] = useState("Light");
		const [getlocale, setlocale] = useState("en-US");

		const toggleTheme = () => {
			gettheme === "Light" ? settheme("Dark") : settheme("Light");
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
				<section className={gettheme.toLocaleLowerCase()}>
					<OriginalComponent />
				</section>
			</ThemeContext.Provider>
		);
	}
	return NewComponent;
};

export default WithTheme;
