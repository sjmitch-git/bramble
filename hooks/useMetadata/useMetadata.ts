import { Metadata } from 'next'

import { OpenGraph, keyWords } from '../../shared/metadata'

export type MetadataProps = {
	title: string
	description: string
	keywords: string
	url: string
}

export let metadata: Metadata

const useMetadata = ({ title, description, keywords, url }: MetadataProps) => {
	metadata = {
		title: title,
		alternates: {
			canonical: url,
		},
		description: description,
		keywords: keywords + ',' + keyWords,
		openGraph: {
			title: title,
			description: description,
			...OpenGraph,
		},
		twitter: {
			card: 'summary_large_image',
		},
	}
	return metadata
}

export default useMetadata
