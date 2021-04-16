import React, { useState, useContext } from 'react'
import './Header.css'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLanguage, faSun, faMoon } from '@fortawesome/free-solid-svg-icons'
import ThemeContext from './../../ThemeContext'

function Header() {

	const [getlanguate, setlanguate] = useState("Español")
	const [themeIcon, setthemeIcon] = useState(faSun)
	const { gettheme, toggleTheme} = useContext(ThemeContext)

	const toggleThemeButton = () => {
		(gettheme === faSun)? setthemeIcon(faMoon) : setthemeIcon(faSun)
		toggleTheme()
	}
	const toggleLanguage = () => {
		(getlanguate === "Español")? setlanguate("English") : setlanguate("Español")
	}

	return (
		<header className="header">
			<section className="titles">
				<h1>Arnulfo Loredo</h1>
				<p className="subtitle">Web Designer & Front End Developer</p>
			</section>
			<ul className="controls">
				<li>
					<button className="toggleButton" onClick={toggleThemeButton}>
						<FontAwesomeIcon icon={themeIcon} />
						{gettheme} Mode</button>
				</li>
				<li>
					<button className="toggleButton" onClick={toggleLanguage}>
						<FontAwesomeIcon icon={faLanguage} />
						{getlanguate}</button>
				</li>
			</ul>
		</header>
	)
}

export default Header
