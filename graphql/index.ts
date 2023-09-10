import { gql } from '@apollo/client'

export const GET_ALL_DOCS = gql`
	query GetAllDocs {
		docCollection {
			items {
				title
				slug
				description
				keywords
			}
		}
	}
`

export const GET_DOC_BY_SLUG = gql`
	query GetDocBySlug($slug: String!) {
		docCollection(where: { slug: $slug }) {
			items {
				title
				slug
				description
				keywords
				body
				index
			}
		}
	}
`

export const GET_DOC_NEXT = gql`
	query GetNextDoc($index: Int!) {
		nextDoc: docCollection(where: { index: $index }, limit: 1) {
			items {
				title
				slug
			}
		}
	}
`

export const GET_DOC_PREV = gql`
	query GetPreviousDoc($index: Int!) {
		previousDoc: docCollection(where: { index: $index }, limit: 1) {
			items {
				title
				slug
			}
		}
	}
`

export interface AllDocsResponse {
	docCollection: {
		items: {
			title: string
			slug: string
			description: string
		}[]
	}
}

export interface DocResponse {
	docCollection: {
		items: {
			title: string
			slug: string
			description: string
			keywords: string
			body: string
			index: number
		}[]
	}
}

export interface NextDocResponse {
	nextDoc: {
		items: {
			title: string
			slug: string
		}[]
	}
}

export interface PreviousDocResponse {
	previousDoc: {
		items: {
			title: string
			slug: string
		}[]
	}
}
