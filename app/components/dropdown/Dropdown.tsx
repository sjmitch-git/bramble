import { Metadata } from 'next'

import DropdownTemplate from '@/templates/Dropdown'

const title = 'Dropdown'
const description =
	'Dropdowns are toggleable, contextual overlays for displaying lists of grouped links'
const keywords = 'Dropdown,Components,React,React Components'

export const metadata: Metadata = {
	title: title,
	alternates: {
		canonical: '/components/dropdown',
	},
	description: description,
	keywords: keywords,
	openGraph: {
		title: title,
		description: description,
		type: 'article',
	},
}

export default function Dropdown() {
	return (
		<>
			<h1>{title}</h1>
			<p>{description}</p>
			<div>
				<DropdownTemplate />
			</div>
		</>
	)
}
