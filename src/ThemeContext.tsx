import { createContext } from "react";

interface ThemeContextInterface {
	gettheme?: string;
	toggleTheme?: any;
	getlocale?: string;
	toggleLocale?: any;
}

const ThemeContext = createContext<ThemeContextInterface>({});

export default ThemeContext;
