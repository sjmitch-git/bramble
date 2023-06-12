import { Metadata } from 'next'

import ModalTemplate from '@/templates/Modal'

const title = 'Modal'
const description = 'Modal description TBD'

export const metadata: Metadata = {
	title: title,
	description: description,
}

export default function Modal() {
	return (
		<>
			<h1>{title}</h1>
			<p>{description}</p>
			<div>
				<ModalTemplate />
			</div>
		</>
	)
}
