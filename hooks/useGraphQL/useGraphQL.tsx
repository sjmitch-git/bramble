import { useQuery, gql } from '@apollo/client'

const GET_ALL_ENTRIES = gql`
	query GetAllEntries {
		entries {
			id
			title
			description
			slug
		}
	}
`

const GET_POST_BY_SLUG = gql`
	query GetPostBySlug($slug: String!) {
		entry(slug: $slug) {
			id
			title
			description
			slug
		}
	}
`

export function useAllEntries() {
	return useQuery(GET_ALL_ENTRIES)
}

export function usePostBySlug(slug: string) {
	return useQuery(GET_POST_BY_SLUG, {
		variables: { slug },
	})
}
