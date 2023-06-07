import { Metadata } from 'next'

import ButtonsTemplate from '@/templates/Buttons'

const title = 'Buttons'
const description = 'Buttons description TBD'

export const metadata: Metadata = {
	title: title,
	description: description,
}

export default function Buttons() {
	return (
		<>
			<h1>{title}</h1>
			<p>{description}</p>
			<div>
				<ButtonsTemplate />
			</div>
		</>
	)
}
