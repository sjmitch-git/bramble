import useMetadata from '@/hooks/useMetadata'

import SwitchTemplate from '@/templates/Switch'

const title = 'Switch'
const description =
	'Customize checkboxes with the "Switch" component, with display, layout, and colour options.'
const keywords = 'Switch Component'
const url = 'components/switch'

export let metadata: any

export default function Switch() {
	metadata = useMetadata({ title, description, keywords, url })
	return (
		<>
			<h1>{title}</h1>
			<p>{description}</p>
			<div>
				<SwitchTemplate />
			</div>
		</>
	)
}
