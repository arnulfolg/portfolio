import React from 'react'
import './Education.css'

function Education() {
	return (
		<>
			<header>
				<h1>Education and Certifications</h1>
			</header>
			<section className="section section_left">
				<header>
					<h2>Education</h2>
				</header>
				<section className="education_section">
					<img src="https://via.placeholder.com/150" alt=""/>
					<section>
						<h3>
							Tec de Monterrey&nbsp;
							<time>(2009-2014)</time>
						</h3>
						<p>Ingeniería en Tecnología de Información y Comunicaciones</p>
					</section>
				</section>
			</section>
			<section className="section section_left">
				<header>
					<h2>Certifications</h2>
				</header>
				<section className="education_section">
					<img src="https://via.placeholder.com/150" alt=""/>
					<section>
						<h3>
							Scrum.org&nbsp;
							<time>(2018)</time>
						</h3>
						<p>Professional Scrum Master I (PSM I)</p>
					</section>
				</section>
				<section className="education_section">
					<img src="https://via.placeholder.com/150" alt=""/>
					<section>
						<h3>
							Microsoft Certified Professional&nbsp;
							<time>(2016)</time>
						</h3>
						<p>Programming in HTML5 with JavaScript and CSS3</p>
					</section>
				</section>
			</section>
		</>
	)
}

export default Education
