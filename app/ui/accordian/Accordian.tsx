import useMetadata from '@/hooks/useMetadata'

import AccordianTemplate from '@/templates/Accordian'

const title = 'Accordian'
const description =
	"Discover Bramble UI's interactive accordion component. Effortlessly organize and present content while creating a seamless and engaging user experience"
const keywords =
	'Bramble UI accordion, Interactive content organization, Seamless user experience, Accordion component features, Web design enhancement, User-friendly content presentation, Modern UI components, Bramble UI showcase, Engaging web interfaces, User experience optimization'
const url = 'ui/accordian'

export let metadata: any

export default function Accordian() {
	metadata = useMetadata({ title, description, keywords, url })
	return (
		<>
			<h1>{title}</h1>
			<p>{description}</p>
			<div>
				<AccordianTemplate />
			</div>
		</>
	)
}
