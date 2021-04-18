import React from "react";

function Skills({ content }) {
	return (
		<section className="section">
			<h2 className="">Skills</h2>
			<section className="section_cols-3">
				{content?.items.map((skill) => {
					return (
						<section key={skill.sys.id}>
							<h3>{skill.title}</h3>
							<ul className="list">
								{skill.skillList.map((skillItem, index) => {
									return <li key={index}>{skillItem}</li>;
								})}
							</ul>
						</section>
					);
				})}
			</section>
		</section>
	);
}

export default Skills;
