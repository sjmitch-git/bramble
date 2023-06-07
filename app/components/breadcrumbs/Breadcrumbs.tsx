import { Metadata } from 'next'

import BreadcrumbsTemplate from '@/templates/Breadcrumbs'

/* interface metadataProps {
	title: string
} */

const title = 'Breadcrumbs'
const description =
	'Indicate the current page’s location within a navigational hierarchy that automatically adds separators via CSS.'

export const metadata: Metadata = {
	title: title,
	description: description,
}

export default function Breadcrumbs() {
	return (
		<>
			<h1>{title}</h1>
			<p>{description}</p>
			<div>
				<BreadcrumbsTemplate />
			</div>
		</>
	)
}
