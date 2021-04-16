import React from 'react'

function PortfolioWidget() {
	return (
		<section className="section">
			<header>
				<h2>Portfolio</h2>
			</header>
			<section className="section_cols-2">
				<section className="portfolio_card">
					<img className="img" src="https://via.placeholder.com/150" alt=""/>
					<p className="title">Project Name</p>
				</section>
				<section className="portfolio_card">
					<img className="img" src="https://via.placeholder.com/150" alt=""/>
					<p className="title">Project Name</p>
				</section>
			</section>
			<footer>
				<a href="#d">See all projects</a>
			</footer>
		</section>
	)
}

export default PortfolioWidget
