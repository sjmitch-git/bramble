import { Metadata } from 'next'

import CloseButtonTemplate from '@/templates/Closebutton'

const title = 'Close Button'
const description = 'Close Button description TBD'

export const metadata: Metadata = {
	title: title,
	description: description,
}

export default function CloseButton() {
	return (
		<>
			<h1>{title}</h1>
			<p>{description}</p>
			<div>
				<CloseButtonTemplate />
			</div>
		</>
	)
}
