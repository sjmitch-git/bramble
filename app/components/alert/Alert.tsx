import useMetadata from '@/hooks/useMetadata'

import AlertTemplate from '@/templates/Alert'

const title = 'Alert'
const description = 'Provide contextual feedback messages for typical user actions'
const keywords = 'Alert Component'
const url = 'components/alert'

export let metadata: any

export default function Alert() {
	metadata = useMetadata({ title, description, keywords, url })
	return (
		<>
			<h1>{title}</h1>
			<p>{description}</p>
			<div>
				<AlertTemplate />
			</div>
		</>
	)
}
