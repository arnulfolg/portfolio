import React from 'react'
import { Link } from 'react-router-dom'
import PortfolioCard from './../../views/portfolio/PortfolioCard'

function PortfolioWidget() {
	return (
		<section className="section">
			<header>
				<h2>Portfolio</h2>
			</header>
			<section className="section_cols-2">
				<PortfolioCard
					image="https://via.placeholder.com/150"
					project="Toyota"
					link="toyota"
				 />
				<PortfolioCard
					image="https://via.placeholder.com/150"
					project="Profuturo"
					link="Profuturo"
				 />
			</section>
			<footer>
				<Link to="/portfolio">See all projects</Link>
			</footer>
		</section>
	)
}

export default PortfolioWidget
