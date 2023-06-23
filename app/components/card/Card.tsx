import { Metadata } from 'next'

import CardTemplate from '@/templates/Card'

const title = 'Card'
const description = 'Card description TBD'

export const metadata: Metadata = {
	title: title,
	description: description,
}

export default function Card() {
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
