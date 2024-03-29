import useMetadata from '@/hooks/useMetadata'
import useSchemaMarkup from '@/hooks/useSchemaMarkup'

import AlertTemplate from '@/templates/Alert'

const title = 'Alert'
const description =
	"Explore Bramble UI's dynamic alert components for effective communication. Enhance user interaction with interactive alerts."
const keywords =
	'Bramble UI alerts, Dynamic alert components, Effective communication, Interactive user alerts, Modern web design, User interaction enhancement, Web development resources, Interactive notifications, Bramble UI showcase, User experience improvement'
const url = 'ui/alert'

export let metadata: any

export default function Alert() {
	metadata = useMetadata({ title, description, keywords, url })
	return (
		<>
			<h1>{title}</h1>
			<p>{description}</p>
			<div>
				<AlertTemplate />
			</div>
			<script
				type='application/ld+json'
				dangerouslySetInnerHTML={{
					__html: useSchemaMarkup({ title, description, url }),
				}}
				key='jsonld'
			/>
		</>
	)
}
