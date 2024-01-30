interface EducationCardInterface {
	info: {
		title: string;
		date: string;
		subtitle: string;
		image?: {
			url: string;
			alt?: string;
		}
	}
}

function EducationCard({ info }: EducationCardInterface) {
	return (
		<section className="education_section">
			{ info.image? <img
				src={info.image.url + "?fl=progressive&w=200"}
				alt=""
				loading="lazy"
			/> : ''}
			
			<section>
				<h3>
					{info.title}&nbsp;
					<time>({info.date})</time>
				</h3>
				<p>{info.subtitle}</p>
			</section>
		</section>
	);
}

export default EducationCard;
