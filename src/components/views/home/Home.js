import React from 'react'
import AboutWidget from './../../widgets/aboutWidget/AboutWidget'
import SkillsWidget from './../../widgets/skillsWidget/SkillsWidget'
import PortfolioWidget from './../../widgets/portfolioWidget/PortfolioWidget'
import EducationWidget from './../../widgets/educationWidget/EducationWidget'

function Home() {
	return (
		<>
			<AboutWidget />
            <SkillsWidget />
            <PortfolioWidget />
            <EducationWidget />
		</>
	)
}

export default Home
