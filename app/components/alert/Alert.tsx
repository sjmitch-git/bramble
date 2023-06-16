import { Metadata } from 'next'

import AlertTemplate from '@/templates/Alert'

const title = 'Alert'
const description = 'Provide contextual feedback messages for typical user actions'

export const metadata: Metadata = {
	title: title,
	description: description,
}

export default function Alert() {
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
