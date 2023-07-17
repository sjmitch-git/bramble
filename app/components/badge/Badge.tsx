import useMetadata from '@/hooks/useMetadata'

import BadgeTemplate from '@/templates/Badge'

const title = 'Badge'
const description = 'Documentation and examples for badges, our small count and labeling component.'
const keywords = 'Badge Component'
const url = 'components/badge'

export let metadata: any

export default function Badge() {
	metadata = useMetadata({ title, description, keywords, url })
	return (
		<>
			<h1>{title}</h1>
			<p>{description}</p>
			<div>
				<BadgeTemplate />
			</div>
		</>
	)
}
