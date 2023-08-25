import useMetadata from '@/hooks/useMetadata'

import BadgeTemplate from '@/templates/Badge'

const title = 'Badge'
const description =
	"Discover versatile badges in Bramble UI's interactive examples. Enhance user experience with informative and customizable web badges."
const keywords =
	'Bramble UI badge examples, Interactive UI components, Informative web badges, Customizable badge implementation, User experience enhancement, Modern web development, Visual cues in UI, Web interface design, Badge versatility, Bramble UI showcase'
const url = 'ui/badge'

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
