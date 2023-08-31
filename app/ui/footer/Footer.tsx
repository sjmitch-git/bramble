import useMetadata from '@/hooks/useMetadata'
import useSchemaMarkup from '@/hooks/useSchemaMarkup'

import FooterTemplate from '@/templates/Footer'

const title = 'Footer'
const description =
	"Design informative footers with Bramble UI's footer component. Create user-friendly web interfaces and enhance navigation with modern footer elements"
const keywords =
	'Bramble UI footer component, Informative footers, User-friendly web interfaces, Modern footer elements, Web design enhancement, Navigation improvement, Web development resources, Interactive UI elements, Bramble UI showcase, User experience optimization'
const url = 'ui/footer'

export let metadata: any

export default function Footer() {
	metadata = useMetadata({ title, description, keywords, url })
	return (
		<>
			<h1>{title}</h1>
			<p>{description}</p>
			<div>
				<FooterTemplate />
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
