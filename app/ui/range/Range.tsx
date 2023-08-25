import useMetadata from '@/hooks/useMetadata'

import RangeTemplate from '@/templates/Range'

const title = 'Range'
const description = 'Range description TBD'
const keywords = 'Range Component'
const url = 'ui/range'

export let metadata: any

export default function Range() {
	metadata = useMetadata({ title, description, keywords, url })
	return (
		<>
			<h1>{title}</h1>
			<p>{description}</p>
			<div>
				<RangeTemplate />
			</div>
		</>
	)
}
