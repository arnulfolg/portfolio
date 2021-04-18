import { gql } from "@apollo/client";

export const HOME_QUERY = gql`
	query GetHomeInfo($language: String!) {
		aboutMeCollection(locale: $language) {
			items {
				title
				description
			}
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
		portfolioCollection(locale: $language, limit: 2) {
			items {
				sys {
					id
				}
				title
				tumbnail {
					url
				}
			}
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
				title
				tumbnail {
					url
				}
			}
		}
	}
`;

export const PROJECT_QUERY = gql`
	query getProjectInfo($id: String!, $language: String!) {
		portfolio(id: $id, locale: $language) {
			sys {
				id
			}
			title
			content
			tumbnail {
				url
			}
		}
	}
`;
