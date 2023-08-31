import useMetadata from '@/hooks/useMetadata'
import useSchemaMarkup from '@/hooks/useSchemaMarkup'

import SidebarTemplate from '@/templates/Sidebar'

const title = 'Sidebar'
const description =
	"Optimize content organization with Bramble UI's sidebar component. Create efficient and modern web interfaces with dynamic sidebar layouts"
const keywords =
	'Bramble UI sidebar component, Content organization optimization, Efficient web interfaces, Dynamic sidebar layouts, User-friendly design, Web development resources, Interactive UI elements, Bramble UI showcase, Modern user experiences, Web content navigation'
const url = 'ui/sidebar'

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
