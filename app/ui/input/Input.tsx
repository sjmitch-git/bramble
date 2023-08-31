import useMetadata from '@/hooks/useMetadata'
import useSchemaMarkup from '@/hooks/useSchemaMarkup'

import InputTemplate from '@/templates/Input'

const title = 'Input'
const description =
	"Enhance user input with Bramble UI's input components. Create intuitive and interactive web forms for seamless user interactions and data collection"
const keywords =
	'Bramble UI input components, Enhance user input, Intuitive web forms, Interactive input elements, User-friendly web design, Data collection improvement, Web development resources, Modern UI components, Bramble UI showcase, Seamless user interactions'
const url = 'ui/input'

export let metadata: any

export default function Input() {
	metadata = useMetadata({ title, description, keywords, url })
	return (
		<>
			<h1>{title}</h1>
			<p>{description}</p>
			<div>
				<InputTemplate />
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
