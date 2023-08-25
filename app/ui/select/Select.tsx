import useMetadata from '@/hooks/useMetadata'

import SelectTemplate from '@/templates/Select'

const title = 'Select'
const description =
	"Optimize user choices with Bramble UI's select component. Create intuitive and efficient web interfaces with modern select dropdowns."
const keywords =
	'Bramble UI select component, Optimize user choices, Intuitive web interfaces, Modern select dropdowns, User-friendly design, Web development resources, Interactive UI elements, Bramble UI showcase, Efficient user interactions, Web form enhancement'
const url = 'ui/select'

export let metadata: any

export default function Select() {
	metadata = useMetadata({ title, description, keywords, url })
	return (
		<>
			<h1>{title}</h1>
			<p>{description}</p>
			<div>
				<SelectTemplate />
			</div>
		</>
	)
}
