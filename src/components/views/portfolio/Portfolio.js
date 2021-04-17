import React from 'react'
import './Portfolio.css'
import PortfolioCard from './PortfolioCard'

function Portfolio() {
	return (
		<>
			<header>
				<h1>Portfolio</h1>
			</header>
			<section className="section section_left">
				
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
				<PortfolioCard
					image="https://via.placeholder.com/150"
					project="IPS"
					link="IPS"
				 />
				<PortfolioCard
					image="https://via.placeholder.com/150"
					project="BBVA"
					link="BBVA"
				 />
			</section>
			</section>
		</>
	)
}

export default Portfolio
