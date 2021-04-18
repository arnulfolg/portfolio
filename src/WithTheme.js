import React, { useState } from "react";
import ThemeContext from "./ThemeContext";

const WithTheme = (OriginalComponent) => {
	function NewComponent() {
		const [gettheme, settheme] = useState("Light");

		const toggleTheme = () => {
			gettheme === "Light" ? settheme("Dark") : settheme("Light");
		};

		return (
			<ThemeContext.Provider
				value={{
					gettheme,
					toggleTheme,
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
