import { Metadata } from 'next'

import { OpenGraph, keyWords, host } from '../../shared/metadata'

export type MetadataProps = {
	title: string
	description: string
	keywords: string
	url: string
}

const useMetadata = ({ title, description, keywords, url }: MetadataProps) => {
	const image = `/api/og?title=${title}&description=${description}`

	const metadata: Metadata = {
		title: title,
		alternates: {
			canonical: url,
		},
		description: description,
		keywords: keywords + ',' + keyWords,
		openGraph: {
			title: title,
			description: description,
			images: [
				{
					url: `${image}`,
					secureUrl: `${host}${image}`,
					width: 1200,
					height: 675,
					alt: `${title}`,
				},
			],
			...OpenGraph,
		},
		twitter: {
			card: 'summary_large_image',
		},
	}
	return metadata
}

export default useMetadata
