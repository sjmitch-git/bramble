import { Metadata } from 'next'

import AccordianTemplate from '@/templates/Accordian'

const title = 'Accordian'
const description = 'Build vertically collapsing accordions'

export const metadata: Metadata = {
	title: title,
	description: description,
}

export default function Accordian() {
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
