import useMetadata from '@/hooks/useMetadata'

import DropdownTemplate from '@/templates/Dropdown'

const title = 'Dropdown'
const description =
	'Dropdowns are toggleable, contextual overlays for displaying lists of grouped links'
const keywords = 'Dropdown Component'
const url = 'components/dropdown'

export let metadata: any

export default function Dropdown() {
	metadata = useMetadata({ title, description, keywords, url })
	return (
		<>
			<h1>{title}</h1>
			<p>{description}</p>
			<div>
				<DropdownTemplate />
			</div>
		</>
	)
}
