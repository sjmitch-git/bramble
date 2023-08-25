import useMetadata from '@/hooks/useMetadata'

import RatingsTemplate from '@/templates/Ratings'

const title = 'Ratings'
const description = 'Documentation and examples for badges, our small count and labeling component.'
const keywords = 'Ratings Component'
const url = 'components/ratings'

export let metadata: any

export default function Ratings() {
	metadata = useMetadata({ title, description, keywords, url })
	return (
		<>
			<h1>{title}</h1>
			<p>{description}</p>
			<div>
				<RatingsTemplate />
			</div>
		</>
	)
}
