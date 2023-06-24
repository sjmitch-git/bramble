import { Metadata } from 'next'

import DialogTemplate from '@/templates/Dialog'

const title = 'Dialog'
const description = 'Dialog description TBD'

export const metadata: Metadata = {
	title: title,
	description: description,
}

export default function Dialog() {
	return (
		<>
			<h1>{title}</h1>
			<p>{description}</p>
			<div>
				<DialogTemplate />
			</div>
		</>
	)
}
