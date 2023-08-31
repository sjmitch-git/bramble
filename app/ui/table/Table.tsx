import useMetadata from '@/hooks/useMetadata'
import useSchemaMarkup from '@/hooks/useSchemaMarkup'

import TableTemplate from '@/templates/Table'

const title = 'Table'
const description =
	"Organize data effectively with Bramble UI's table component. Create user-friendly web interfaces with modern table designs for seamless content presentation."
const keywords =
	'Bramble UI table component, Organize data effectively, User-friendly web interfaces, Modern table designs, Data presentation, Web design enhancement, Content organization, Web development resources, Interactive UI elements, Bramble UI showcase'
const url = 'ui/table'

export let metadata: any

export default function Table() {
	metadata = useMetadata({ title, description, keywords, url })
	return (
		<>
			<h1>{title}</h1>
			<p>{description}</p>
			<div>
				<TableTemplate />
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
