import useMetadata from '@/hooks/useMetadata'
import useSchemaMarkup from '@/hooks/useSchemaMarkup'

import DialogTemplate from '@/templates/Dialog'

const title = 'Dialog'
const description =
	"Craft user-friendly dialog boxes with Bramble UI's dialog component. Enhance user interactions and create seamless web experiences with modern dialogs."
const keywords =
	'Bramble UI dialog component, User-friendly dialog boxes, Enhance user interactions, Seamless web experiences, Modern dialog design, Web development resources, Interactive UI elements, Bramble UI showcase, User interface design, Dialog box implementation'
const url = 'ui/dialog'

export let metadata: any

export default function Dialog() {
	metadata = useMetadata({ title, description, keywords, url })
	return (
		<>
			<h1>{title}</h1>
			<p>{description}</p>
			<div>
				<DialogTemplate />
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
