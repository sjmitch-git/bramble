import useMetadata from '@/hooks/useMetadata'
import useSchemaMarkup from '@/hooks/useSchemaMarkup'

import CardTemplate from '@/templates/Card'

const title = 'Card'
const description =
	'Discover versatile card components in Bramble UI for captivating content presentation. Elevate your web design with modern card layouts and interactions.'
const keywords =
	'Bramble UI card components, Versatile card design, Captivating content presentation, Modern web design, Card layouts and interactions, User-friendly web development, Interactive UI elements, Web content organization, Bramble UI showcase, Engaging user experiences'
const url = 'ui/card'

export let metadata: any

export default function Card() {
	metadata = useMetadata({ title, description, keywords, url })
	return (
		<>
			<h1>{title}</h1>
			<p>{description}</p>
			<div>
				<CardTemplate />
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
