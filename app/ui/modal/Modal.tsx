import useMetadata from '@/hooks/useMetadata'

import ModalTemplate from '@/templates/Modal'

const title = 'Modal'
const description =
	"Create interactive modals with Bramble UI's modal component. Enhance user interactions and design seamless web experiences with modern modals."
const keywords =
	'Bramble UI modal component, Interactive modals, Enhance user interactions, Seamless web experiences, Modern modal design, User-friendly design, Web development resources, Interactive UI elements, Bramble UI showcase, User interface enhancement'
const url = 'ui/modal'

export let metadata: any

export default function Modal() {
	metadata = useMetadata({ title, description, keywords, url })
	return (
		<>
			<h1>{title}</h1>
			<p>{description}</p>
			<div>
				<ModalTemplate />
			</div>
		</>
	)
}
