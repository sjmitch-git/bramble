import useMetadata from '@/hooks/useMetadata'
import useSchemaMarkup from '@/hooks/useSchemaMarkup'

import GalleryTemplate from '@/templates/Gallery'

const title = 'Gallery'
const description =
	"Explore Bramble UI's gallery component for stunning image showcases. Elevate your web design with modern gallery layouts and captivating visuals."
const keywords =
	'Bramble UI gallery component, Image showcases, Modern gallery layouts, Web design enhancement, Captivating visuals, User-friendly interfaces, Web development resources, Interactive UI elements, Bramble UI showcase, Engaging user experiences'
const url = 'ui/gallery'

export let metadata: any

export default function Gallery() {
	metadata = useMetadata({ title, description, keywords, url })
	return (
		<>
			<h1>{title}</h1>
			<p>{description}</p>
			<div>
				<GalleryTemplate />
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
