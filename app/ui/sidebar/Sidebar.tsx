import useMetadata from '@/hooks/useMetadata'

import SidebarTemplate from '@/templates/Sidebar'

const title = 'Sidebar'
const description =
	'Usage and examples of the Sidebar component, a vertical sliding overlay with right or left positioning'
const keywords = 'Sidebar Component'
const url = 'components/sidebar'

export let metadata: any

export default function Sidebar() {
	metadata = useMetadata({ title, description, keywords, url })
	return (
		<>
			<h1>{title}</h1>
			<p>{description}</p>
			<div>
				<SidebarTemplate />
			</div>
		</>
	)
}
