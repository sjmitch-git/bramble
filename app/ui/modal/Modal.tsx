import useMetadata from '@/hooks/useMetadata'

import ModalTemplate from '@/templates/Modal'

const title = 'Modal'
const description = 'Modal description TBD'
const keywords = 'Modal Component'
const url = 'components/modal'

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
