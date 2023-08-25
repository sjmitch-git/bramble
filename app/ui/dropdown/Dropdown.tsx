import useMetadata from '@/hooks/useMetadata'

import DropdownTemplate from '@/templates/Dropdown'

const title = 'Dropdown'
const description =
	"Enhance user selections with Bramble UI's dropdown component. Create interactive and efficient web interfaces with modern dropdown functionality."
const keywords =
	'Bramble UI dropdown component, Enhance user selections, Interactive web interfaces, Modern dropdown functionality, User-friendly design, Web development resources, Interactive UI elements, Bramble UI showcase, Efficient user interactions, Web form optimization'
const url = 'ui/dropdown'

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
