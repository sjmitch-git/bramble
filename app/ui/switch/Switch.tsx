import useMetadata from '@/hooks/useMetadata'
import useSchemaMarkup from '@/hooks/useSchemaMarkup'

import SwitchTemplate from '@/templates/Switch'

const title = 'Switch'
const description =
	"Implement user-friendly switches with Bramble UI's switch component. Create intuitive web interfaces and enhance user interactions with modern switches."
const keywords =
	'Bramble UI switch component, User-friendly switches, Intuitive web interfaces, Modern switch elements, Web design enhancement, User interaction improvement, Web development resources, Interactive UI elements, Bramble UI showcase, User experience optimization'
const url = 'ui/switch'

export let metadata: any

export default function Switch() {
	metadata = useMetadata({ title, description, keywords, url })
	return (
		<>
			<h1>{title}</h1>
			<p>{description}</p>
			<div>
				<SwitchTemplate />
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
