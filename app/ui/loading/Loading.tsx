import useMetadata from '@/hooks/useMetadata'
import useSchemaMarkup from '@/hooks/useSchemaMarkup'

import LoadingTemplate from '@/templates/Loading'

const title = 'Loading'
const description =
	"Improve user experience with Bramble UI's loading component. Create engaging and seamless web interfaces with modern loading animations."
const keywords =
	'Bramble UI loading component, Improve user experience, Engaging web interfaces, Modern loading animations, User-friendly design, Web development resources, Interactive UI elements, Bramble UI showcase, Seamless user interactions, Web design enhancement'
const url = 'ui/loading'

export let metadata: any

export default function Loading() {
	metadata = useMetadata({ title, description, keywords, url })
	return (
		<>
			<h1>{title}</h1>
			<p>{description}</p>
			<div>
				<LoadingTemplate />
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
