import useMetadata from '@/hooks/useMetadata'

import DrawerTemplate from '@/templates/Drawer'

const title = 'Drawer'
const description =
	'Usage and examples of the Drawer component, a global horizontal overlay with top or bottom positioning'
const keywords = 'Drawer Component'
const url = 'components/drawer'

export let metadata: any

export default function Drawer() {
	metadata = useMetadata({ title, description, keywords, url })
	return (
		<>
			<h1>{title}</h1>
			<p>{description}</p>
			<div>
				<DrawerTemplate />
			</div>
		</>
	)
}
