import useMetadata from '@/hooks/useMetadata'

import CardTemplate from '@/templates/Card'

const title = 'Card'
const description = 'Card description TBD'
const keywords = 'Card Component'
const url = 'components/card'

export let metadata: any

export default function Card() {
	metadata = useMetadata({ title, description, keywords, url })
	return (
		<>
			<h1>{title}</h1>
			<p>{description}</p>
			<div>
				<CardTemplate />
			</div>
		</>
	)
}
