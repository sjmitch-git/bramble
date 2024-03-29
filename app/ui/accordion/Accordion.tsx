import useMetadata from '@/hooks/useMetadata'
import useSchemaMarkup from '@/hooks/useSchemaMarkup'

import AccordionTemplate from '@/templates/Accordion'

const title = 'Accordion'
const description =
	"Discover Bramble UI's interactive accordion component. Effortlessly organize and present content while creating a seamless and engaging user experience"
const keywords =
	'Bramble UI accordion, Interactive content organization, Seamless user experience, Accordion component features, Web design enhancement, User-friendly content presentation, Modern UI components, Bramble UI showcase, Engaging web interfaces, User experience optimization'
const url = 'ui/accordion'

export let metadata: any

export default function Accordian() {
	metadata = useMetadata({ title, description, keywords, url })

	return (
		<>
			<h1>{title}</h1>
			<p>{description}</p>
			<div>
				<AccordionTemplate />
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
