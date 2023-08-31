import useMetadata from '@/hooks/useMetadata'
import useSchemaMarkup from '@/hooks/useSchemaMarkup'

import FormTemplate from '@/templates/Form'

const title = 'Form'
const description =
	"Create efficient and user-friendly forms with Bramble UI's form components. Enhance data collection and validation for seamless web interactions"
const keywords =
	'Bramble UI form components, Efficient form creation, User-friendly forms, Data collection enhancement, Web interaction improvement, Form validation, Modern web design, Web development resources, Bramble UI showcase, User experience optimization'
const url = 'ui/form'

export let metadata: any

export default function Form() {
	metadata = useMetadata({ title, description, keywords, url })
	return (
		<>
			<h1>{title}</h1>
			<p>{description}</p>
			<div>
				<FormTemplate />
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
