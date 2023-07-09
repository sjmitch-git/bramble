import { Metadata } from 'next'

import RangeTemplate from '@/templates/Range'

const title = 'Range'
const description = 'Range description TBD'

export const metadata: Metadata = {
	title: title,
	description: description,
}

export default function Range() {
	return (
		<>
			<h1>{title}</h1>
			<p>{description}</p>
			<div>
				<RangeTemplate />
			</div>
		</>
	)
}
