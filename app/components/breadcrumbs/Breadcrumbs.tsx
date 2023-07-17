import useMetadata from '@/hooks/useMetadata'

import BreadcrumbsTemplate from '@/templates/Breadcrumbs'

/* interface metadataProps {
	title: string
} */

const title = 'Breadcrumbs'
const description =
	'Indicate the current page’s location within a navigational hierarchy that automatically adds separators via CSS.'
const keywords = 'Breadcrumbs Component'
const url = 'components/breadcrumbs'

export let metadata: any

export default function Breadcrumbs() {
	metadata = useMetadata({ title, description, keywords, url })
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
