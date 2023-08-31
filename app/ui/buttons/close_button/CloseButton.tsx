import useMetadata from '@/hooks/useMetadata'
import useSchemaMarkup from '@/hooks/useSchemaMarkup'

import CloseButtonTemplate from '@/templates/Closebutton'

const title = 'Close Button'
const description =
	"Enhance user interactions with Bramble UI's close button component. Create intuitive and accessible web interfaces for seamless user experiences."
const keywords =
	'Bramble UI close button, User interaction enhancement, Intuitive web interfaces, Accessible UI components, Seamless user experiences, Modern web design, Interactive elements, Bramble UI showcase, User-friendly web development, Button customization'
const url = 'ui/buttons/close_button'

export let metadata: any

export default function CloseButton() {
	metadata = useMetadata({ title, description, keywords, url })
	return (
		<>
			<h1>{title}</h1>
			<p>{description}</p>
			<div>
				<CloseButtonTemplate />
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
