interface SkillsInterface {
	content: {
		items: {
			tumbnail: {
				url: string;
			}
			sys: {
				id: string;
			}
			title: string;
			skillList: string[]
		}[]
	}
	titles: {
		heading: string;
	}
	link?: {
		heading: string;
	}
}

function Skills({ content, titles }: SkillsInterface) {
	return (
		<section className="section">
			<h2 className="">{titles?.heading}</h2>
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
