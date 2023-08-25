import useMetadata from '@/hooks/useMetadata'

import BreadcrumbsTemplate from '@/templates/Breadcrumbs'

/* interface metadataProps {
	title: string
} */

const title = 'Breadcrumbs'
const description =
	"Navigate effectively through Bramble UI's breadcrumbs component. Streamline user journeys and provide clear website navigation for improved user experiences."
const keywords =
	'Bramble UI breadcrumbs, Effective navigation, User journey streamlining, Clear website navigation, User experience enhancement, Modern web design, Seamless navigation components, Bramble UI showcase, Web development resources, User-friendly interfaces'
const url = 'ui/breadcrumbs'

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
