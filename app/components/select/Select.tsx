import useMetadata from '@/hooks/useMetadata'

import SelectTemplate from '@/templates/Select'

const title = 'Select'
const description = 'Select description TBD'
const keywords = 'Select Component'
const url = 'components/select'

export let metadata: any

export default function Select() {
	metadata = useMetadata({ title, description, keywords, url })
	return (
		<>
			<h1>{title}</h1>
			<p>{description}</p>
			<div>
				<SelectTemplate />
			</div>
		</>
	)
}
