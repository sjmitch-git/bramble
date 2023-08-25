import useMetadata from '@/hooks/useMetadata'

import AccordianTemplate from '@/templates/Accordian'

const title = 'Accordian'
const description =
	'Examples and usage of the "Accordian" component to build data-driven vertically collapsing accordions, with customizable layout and styling'
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
