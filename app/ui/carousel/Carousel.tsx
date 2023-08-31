import useMetadata from '@/hooks/useMetadata'
import useSchemaMarkup from '@/hooks/useSchemaMarkup'

import CarouselTemplate from '@/templates/Carousel'

const title = 'Carousel'
const description =
	"Explore Bramble UI's interactive carousel component for dynamic content showcasing. Create captivating web experiences with modern carousel features."
const keywords =
	'Bramble UI carousel, Interactive content showcase, Dynamic web experiences, Modern carousel features, User-friendly web design, Web content presentation, Bramble UI showcase, Engaging user interactions, Web development resources, Captivating user experience'
const url = 'ui/carousel'

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
			<script
				type='application/ld+json'
				dangerouslySetInnerHTML={{
					__html: useSchemaMarkup({ title, description, url }),
				}}
				key='jsonld'
			/>
		</>
	)
}
