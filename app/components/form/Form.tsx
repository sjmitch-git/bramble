import useMetadata from '@/hooks/useMetadata'

import FormTemplate from '@/templates/Form'

const title = 'Form'
const description =
	'Examples and useage of the "Form" component, with examples of "Input", "Range", and "Autocomplete" components'
const keywords = 'Form Component'
const url = 'components/form'

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
		</>
	)
}
