import useMetadata from '@/hooks/useMetadata'

import DialogTemplate from '@/templates/Dialog'

const title = 'Dialog'
const description =
	'The dialog element is a useful element for representing any kind of dialog in HTML'
const keywords = 'Dialog Component'
const url = 'components/dialog'

export let metadata: any

export default function Dialog() {
	metadata = useMetadata({ title, description, keywords, url })
	return (
		<>
			<h1>{title}</h1>
			<p>{description}</p>
			<div>
				<DialogTemplate />
			</div>
		</>
	)
}
