import { useContext } from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLanguage } from "@fortawesome/free-solid-svg-icons";
import ThemeContext from "../../ThemeContext";

import { useContentful } from "../../Hooks/useContentful";
import { LOCALE_QUERY } from "../../graphql/queries";

function ToggleLanguageButton() {
	const { toggleLocale } = useContext(ThemeContext);
	const [{ locale }, loading] = useContentful(LOCALE_QUERY);

	return (
		<button
			disabled={loading}
			className="toggleButton dark:outline-white"
			onClick={toggleLocale}
		>
			<FontAwesomeIcon icon={faLanguage} />
			<span>{locale?.heading}</span>
		</button>
	);
}

export default ToggleLanguageButton;
