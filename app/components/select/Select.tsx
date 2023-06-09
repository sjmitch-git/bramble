import { Metadata } from 'next'

import SelectTemplate from '@/templates/Select'

const title = 'Select'
const description = 'Select description TBD'

export const metadata: Metadata = {
	title: title,
	description: description,
}

export default function Select() {
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
