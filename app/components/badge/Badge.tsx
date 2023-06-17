import { Metadata } from 'next'

import BadgeTemplate from '@/templates/Badge'

const title = 'Badge'
const description = 'Documentation and examples for badges, our small count and labeling component.'

export const metadata: Metadata = {
	title: title,
	description: description,
}

export default function Badge() {
	return (
		<>
			<h1>{title}</h1>
			<p>{description}</p>
			<div>
				<BadgeTemplate />
			</div>
		</>
	)
}
