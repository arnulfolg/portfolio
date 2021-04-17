import React from 'react'
import { useParams } from 'react-router-dom'

function Project() {

	let { project } = useParams();

	return (
		<>
			<header>
				<h1>Project: {project}</h1>
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
		</>
	)
}

export default Project
