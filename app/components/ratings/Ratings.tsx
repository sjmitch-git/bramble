import { Metadata } from 'next'

import RatingsTemplate from '@/templates/Ratings'

const title = 'Ratings'
const description = 'Documentation and examples for badges, our small count and labeling component.'

export const metadata: Metadata = {
	title: title,
	description: description,
}

export default function Ratings() {
	return (
		<>
			<h1>{title}</h1>
			<p>{description}</p>
			<div>
				<RatingsTemplate />
			</div>
		</>
	)
}
