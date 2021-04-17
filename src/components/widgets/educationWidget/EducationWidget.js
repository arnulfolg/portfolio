import React from 'react'
import { Link } from 'react-router-dom'

function EducationWidget() {
	return (
		<section className="section">
			<header>
				<h2>Education and Certifications</h2>
			</header>
			<section className="section_cols-3">
				<section className="education_card">
					<img className="img" src="https://via.placeholder.com/150" alt=""/>
					<p className="title">Certification</p>
				</section>
				<section className="education_card">
					<img className="img" src="https://via.placeholder.com/150" alt=""/>
					<p className="title">Certification</p>
				</section>
				<section className="education_card">
					<img className="img" src="https://via.placeholder.com/150" alt=""/>
					<p className="title">Certification</p>
				</section>
			</section>
			<footer>
				<Link to="/education">See more</Link>
			</footer>
		</section>
	)
}

export default EducationWidget
