import useMetadata from '@/hooks/useMetadata'

import CarouselTemplate from '@/templates/Carousel'

const title = 'Carousel'
const description = 'Carousel TBD'
const keywords = 'Carousel Component'
const url = 'components/carousel'

export let metadata: any

export default function Carousel() {
	metadata = useMetadata({ title, description, keywords, url })
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
