import { gql } from "@apollo/client";

export const HOME_QUERY = gql`
	query GetHomeInfo($language: String!) {
		about: headings(id: "5lkl1wDaWl4pg5vAAKFAnt", locale: $language) {
			heading
		}
		aboutMeCollection(locale: $language) {
			items {
				title
				description
			}
		}
		skills: headings(id: "69tmMvtPx8twaEgeU3Vjf4", locale: $language) {
			heading
		}
		skillsCollection {
			items {
				sys {
					id
				}
				title
				skillList
			}
		}
		portfolio: headings(id: "4KfXOh5UAb8vCN9YiQvaI7", locale: $language) {
			heading
		}
		portfolioLink: headings(
			id: "4672gexNeDtvV2QiQYGBQT"
			locale: $language
		) {
			heading
		}
		portfolioCollection(locale: $language, limit: 2) {
			items {
				sys {
					id
				}
				projectName
				tumbnail {
					url
				}
			}
		}
		education: headings(id: "BJft3IxP7iqujQ53J1aYl", locale: $language) {
			heading
		}
		educationLink: headings(
			id: "4bfcgFHvZ8MdeIywpTXR5f"
			locale: $language
		) {
			heading
		}
		educationCollection(locale: $language, limit: 3) {
			items {
				subtitle
				image {
					url
				}
			}
		}
	}
`;

export const HEADER_QUERY = gql`
	query getTitles($language: String!) {
		cvTitle(id: "3Z2C9DB5pyBAxNBkXqyBSz", locale: $language) {
			title
			tagline
		}
	}
`;

export const EDUCATION_QUERY = gql`
	query getCerts($language: String!) {
		educationPage: headings(
			id: "BJft3IxP7iqujQ53J1aYl"
			locale: $language
		) {
			heading
		}
		education: headings(id: "5Xlj25BEabB30fdd42rYts", locale: $language) {
			heading
		}
		degreeCollection(locale: $language) {
			items {
				sys {
					id
				}
				title
				date
				subtitle
				image {
					url
				}
			}
		}
		certification: headings(
			id: "4ZOClGf1qddWC2MZWH5d2g"
			locale: $language
		) {
			heading
		}
		educationCollection(locale: $language) {
			items {
				sys {
					id
				}
				title
				date
				subtitle
				image {
					url
				}
			}
		}
	}
`;

export const PORTFOLIO_QUERY = gql`
	query getPortfolio($language: String!) {
		portfolioCollection(locale: $language) {
			items {
				sys {
					id
				}
				projectName
				tumbnail {
					url
				}
			}
		}
		portfolio: headings(id: "4KfXOh5UAb8vCN9YiQvaI7", locale: $language) {
			heading
		}
	}
`;

export const PROJECT_QUERY = gql`
	query getProjectInfo($id: String!, $language: String!) {
		portfolio(id: $id, locale: $language) {
			sys {
				id
			}
			projectName
			client
			role
			time
			techStack
			summary
			summaryPicture {
				title
				description
				src: url
				width
				height
			}
			description
			iaPicture {
				title
				description
				src: url
				width
				height
			}
			galleryCollection {
				items {
					sys {
						id
					}
					title
					description
					src: url
					width
					height
				}
			}
			takeaway
		}
		summary: headings(id: "4gobIU7yJwntG0shciWa86", locale: $language) {
			heading
		}
		client: headings(id: "2tBpCLYICvhVtHmzoiKznc", locale: $language) {
			heading
		}
		role: headings(id: "4Ypv2e1l5f7bJaryApIaSN", locale: $language) {
			heading
		}
		ia: headings(id: "4HYfNTYg82pPI2UKRzrBzC", locale: $language) {
			heading
		}
		gallery: headings(id: "4Q9KJGEyR4nSO8Ykbaddyu", locale: $language) {
			heading
		}
		time: headings(id: "2rAQXMfN9S7oyvjWudhBdn", locale: $language) {
			heading
		}
		techStack: headings(id: "wW5czNJAbbfqncgYxjycT", locale: $language) {
			heading
		}
		description: headings(id: "12SZ4gwxrJQDNffQJ5r2wC", locale: $language) {
			heading
		}
		takeaway: headings(id: "WAteUbv19cosqF7OJLMCK", locale: $language) {
			heading
		}
	}
`;

export const RESUME_QUERY = gql`
	query getResume($language: String!) {
		asset(id: "4mH92P2EMhcmAiRzZaqJsG", locale: $language) {
			title
			fileName
			url
		}
	}
`;

export const LOCALE_QUERY = gql`
	query getLocaleTranslation($language: String!) {
		locale: headings(id: "ryPXmqgWyGKZKVNpevKXS", locale: $language) {
			heading
		}
	}
`;

export const THEME_QUERY = gql`
	query getLocaleTranslation($language: String!) {
		dark: headings(id: "rTtf5I7pfOcYV5iYDdpUR", locale: $language) {
			heading
		}
		light: headings(id: "79Dm3OEJSUvlbDonKZs8RN", locale: $language) {
			heading
		}
	}
`;

export const FOOTER_QUERY = gql`
	query getFooterTexts($language: String!) {
		copyright: headings(id: "6LUAZri2OCvJyO0scmN133", locale: $language) {
			heading
		}
		letstalk: headings(id: "2JKBOifyd5Ab8br6vKYH6m", locale: $language) {
			heading
		}
	}
`;
