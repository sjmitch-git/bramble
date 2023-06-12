import { Metadata } from 'next'

import FigureTemplate from '@/templates/Figure'

const title = 'Figure'
const description = 'Figure description TBD'

export const metadata: Metadata = {
	title: title,
	description: description,
}

export default function Figure() {
	return (
		<>
			<h1>{title}</h1>
			<p>{description}</p>
			<div>
				<FigureTemplate />
			</div>
		</>
	)
}
