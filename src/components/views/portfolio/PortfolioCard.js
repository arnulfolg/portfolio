import React from 'react'
import { Link } from 'react-router-dom'

function PortfolioCard({image, project, link}) {
	return (
		<Link className="portfolio_card" to={`/${link}`}>
			<img className="img" src={image} alt=""/>
			<p className="title">{project}</p>
		</Link>
	)
}

export default PortfolioCard
