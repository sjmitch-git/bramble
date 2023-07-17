import useMetadata from '@/hooks/useMetadata'

import AccordianTemplate from '@/templates/Accordian'

const title = 'Accordian'
const description = 'Build vertically collapsing accordions'
const keywords = 'Accordian Component'
const url = 'components/accordian'

export let metadata: any

export default function Accordian() {
	metadata = useMetadata({ title, description, keywords, url })
	return (
		<>
			<h1>{title}</h1>
			<p>{description}</p>
			<div>
				<AccordianTemplate />
			</div>
		</>
	)
}
