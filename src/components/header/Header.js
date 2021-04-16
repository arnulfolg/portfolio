import React, { useState, useContext, useEffect } from 'react'
import './Header.css'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLanguage, faSun, faMoon } from '@fortawesome/free-solid-svg-icons'
import ThemeContext from './../../ThemeContext'

function Header() {

	const scrollHeight = 120

	const [getlanguate, setlanguate] = useState("Español")
	const [themeIcon, setthemeIcon] = useState(faMoon)
	const { gettheme, toggleTheme} = useContext(ThemeContext)

  const [isShrunk, setShrunk] = useState(false);
	useEffect(() => {
		
    const onScroll = () => {
      setShrunk((isShrunk) => {
        if (
          !isShrunk &&
          (document.body.scrollTop > scrollHeight ||
            document.documentElement.scrollTop > scrollHeight)
        ) {
          return true;
        }

        if (
          isShrunk &&
          document.body.scrollTop < scrollHeight &&
          document.documentElement.scrollTop < scrollHeight
        ) {
          return false;
        }

        return isShrunk;
      });
    };

    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
	}, [])

	const toggleThemeButton = () => {
		(themeIcon === faSun)? setthemeIcon(faMoon) : setthemeIcon(faSun)
		toggleTheme()
	}
	const toggleLanguage = () => {
		(getlanguate === "Español")? setlanguate("English") : setlanguate("Español")
	}

	return (
		<header className={`header ${isShrunk ? "header_small" : ""} `}>
			<section className="titles">
				<h1>Arnulfo Loredo</h1>
				<p className="subtitle">Web Designer & Front End Developer</p>
			</section>
			<ul className="controls">
				<li>
					<button 
					className="toggleButton" 
					onClick={toggleThemeButton}>
						<FontAwesomeIcon icon={themeIcon} />
						<span>{(gettheme === "Light") 
							? "Dark"
							: "Light"} Mode</span>
					</button>
				</li>
				<li>
					<button 
					className="toggleButton" 
					onClick={toggleLanguage}>
						<FontAwesomeIcon icon={faLanguage} />
						<span>{getlanguate}</span>
					</button>
				</li>
			</ul>
		</header>
	)
}

export default Header
