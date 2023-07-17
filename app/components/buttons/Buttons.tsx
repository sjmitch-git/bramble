import useMetadata from '@/hooks/useMetadata'

import ButtonsTemplate from '@/templates/Buttons'

const title = 'Buttons'
const description = 'Buttons description TBD'
const keywords = 'Buttons Component'
const url = 'components/buttons'

export let metadata: any

export default function Buttons() {
	metadata = useMetadata({ title, description, keywords, url })
	return (
		<>
			<h1>{title}</h1>
			<p>{description}</p>
			<div>
				<ButtonsTemplate />
			</div>
		</>
	)
}
