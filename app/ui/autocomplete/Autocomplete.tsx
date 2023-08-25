import useMetadata from '@/hooks/useMetadata'

import AutocompleteTemplate from '@/templates/Autocomplete'

const title = 'Autocomplete'
const description =
	"Simplify user input with Bramble UI's autocomplete component. Enhance search functionality and create efficient, user-friendly web experiences."
const keywords =
	'Bramble UI autocomplete, User input simplification, Search functionality enhancement, Efficient web experiences, Interactive UI components, User-friendly web design, Modern web development, Bramble UI showcase, Web form optimization, User interaction improvement'
const url = 'ui/autocomplete'

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
