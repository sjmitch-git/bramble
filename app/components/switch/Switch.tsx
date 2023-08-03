import useMetadata from '@/hooks/useMetadata'

import SwitchTemplate from '@/templates/Switch'

const title = 'Switch'
const description = 'Switch description TBD'
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
