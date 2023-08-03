import useMetadata from '@/hooks/useMetadata'

import AutocompleteTemplate from '@/templates/Autocomplete'

const title = 'Autocomplete'
const description = 'Examples and usage of the "Autocomplete" component ...'
const keywords = 'Autocomplete Component'
const url = 'components/autocomplete'

export let metadata: any

export default function Autocomplete() {
	metadata = useMetadata({ title, description, keywords, url })
	return (
		<>
			<h1>{title}</h1>
			<p>{description}</p>
			<div>
				<AutocompleteTemplate />
			</div>
		</>
	)
}
