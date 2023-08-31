import useMetadata from '@/hooks/useMetadata'
import useSchemaMarkup from '@/hooks/useSchemaMarkup'

import NavbarTemplate from '@/templates/Navbar'

const title = 'Navbar'
const description =
	"Craft effective navigation with Bramble UI's navbar component. Design modern and user-friendly web interfaces with dynamic navbar features."
const keywords =
	'Bramble UI navbar component, Effective navigation design, Modern web interfaces, User-friendly UI elements, Dynamic navbar features, Web development resources, Interactive UI elements, Bramble UI showcase, Seamless user experiences, Web navigation optimization'
const url = 'ui/navbar'

export let metadata: any

export default function Navbar() {
	metadata = useMetadata({ title, description, keywords, url })
	return (
		<>
			<h1>{title}</h1>
			<p>{description}</p>
			<div>
				<NavbarTemplate />
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
