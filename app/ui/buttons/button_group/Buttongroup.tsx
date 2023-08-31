import useMetadata from '@/hooks/useMetadata'
import useSchemaMarkup from '@/hooks/useSchemaMarkup'

import ButtongroupTemplate from '@/templates/Buttongroup'

const title = 'Button Group'
const description =
	"Effortlessly manage button groupings with Bramble UI's button group component. Design sleek and organized user interfaces for enhanced user experiences."
const keywords =
	'Bramble UI button group, Button grouping management, Sleek UI design, Organized user interfaces, Enhanced user experiences, Modern web development, User-friendly components, Web design optimization, Bramble UI showcase, Interactive web element'
const url = 'ui/buttons/button_group'

export let metadata: any

export default function Buttongroup() {
	metadata = useMetadata({ title, description, keywords, url })
	return (
		<>
			<h1>{title}</h1>
			<p>{description}</p>
			<div>
				<ButtongroupTemplate />
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
