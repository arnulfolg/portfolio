import React, { useState } from "react";
import ThemeContext from "./ThemeContext";

const WithTheme = (OriginalComponent) => {
	function NewComponent() {
		const setDocumentLanguage = (lang) => {
			document.documentElement.lang = lang;
		};

		const [gettheme, settheme] = useState(() => {
			const theme = window.localStorage.getItem("theme") || "light";
			return theme;
		});
		const [getlocale, setlocale] = useState(() => {
			const locale = window.localStorage.getItem("locale") || "en-US";
			setDocumentLanguage(locale);
			return locale;
		});

		const toggleTheme = () => {
			gettheme === "light"
				? settheme(() => {
						window.localStorage.setItem("theme", "dark");
						return "dark";
				  })
				: settheme(() => {
						window.localStorage.setItem("theme", "light");
						return "light";
				  });
		};

		const toggleLocale = () => {
			getlocale === "en-US"
				? setlocale(() => {
						window.localStorage.setItem("locale", "es-419");
						setDocumentLanguage("es-419");
						return "es-419";
				  })
				: setlocale(() => {
						window.localStorage.setItem("locale", "en-US");
						setDocumentLanguage("en-US");
						return "en-US";
				  });
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
