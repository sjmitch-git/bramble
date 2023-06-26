import { Metadata } from 'next'

import CarouselTemplate from '@/templates/Carousel'

const title = 'Carousel'
const description = 'Carousel TBD'

export const metadata: Metadata = {
	title: title,
	description: description,
}

export default function Carousel() {
	return (
		<>
			<h1>{title}</h1>
			<p>{description}</p>
			<div>
				<CarouselTemplate />
			</div>
		</>
	)
}
