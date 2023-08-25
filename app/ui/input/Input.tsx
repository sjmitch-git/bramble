import useMetadata from '@/hooks/useMetadata'

import InputTemplate from '@/templates/Input'

const title = 'Input'
const description = 'Input description TBD'
const keywords = 'Input Component'
const url = 'components/input'

export let metadata: any

export default function Input() {
	metadata = useMetadata({ title, description, keywords, url })
	return (
		<>
			<h1>{title}</h1>
			<p>{description}</p>
			<div>
				<InputTemplate />
			</div>
		</>
	)
}
