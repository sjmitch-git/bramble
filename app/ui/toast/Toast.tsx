import useMetadata from '@/hooks/useMetadata'
import useSchemaMarkup from '@/hooks/useSchemaMarkup'

import ToastTemplate from '@/templates/Toast'

const title = 'Toast'
const description =
	"Display important notifications seamlessly with Bramble UI's toast component. Enhance user communication and create efficient web interfaces."
const keywords =
	'Bramble UI toast component, Display notifications, Enhance user communication, Efficient web interfaces, User-friendly design, Web development resources, Interactive UI elements, Bramble UI showcase, User experience improvement, Web notification system'
const url = 'ui/toast'

export let metadata: any

export default function Toast() {
	metadata = useMetadata({ title, description, keywords, url })
	return (
		<>
			<h1>{title}</h1>
			<p>{description}</p>
			<div>
				<ToastTemplate />
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
