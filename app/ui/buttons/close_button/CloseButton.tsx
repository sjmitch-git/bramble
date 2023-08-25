import useMetadata from '@/hooks/useMetadata'

import CloseButtonTemplate from '@/templates/Closebutton'

const title = 'Close Button'
const description = 'Close Button description TBD'
const keywords = 'Close Button Component'
const url = 'components/buttons/close_button'

export let metadata: any

export default function CloseButton() {
	metadata = useMetadata({ title, description, keywords, url })
	return (
		<>
			<h1>{title}</h1>
			<p>{description}</p>
			<div>
				<CloseButtonTemplate />
			</div>
		</>
	)
}
