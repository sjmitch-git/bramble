import useMetadata from '@/hooks/useMetadata'

import RatingsTemplate from '@/templates/Ratings'

const title = 'Ratings'
const description =
	"Implement user ratings seamlessly with Bramble UI's ratings component. Enhance user feedback and create engaging web experiences with modern rating systems."
const keywords =
	'Bramble UI ratings component, User ratings implementation, Enhance user feedback, Engaging web experiences, Modern rating systems, Web development resources, Interactive UI elements, User-friendly design, Bramble UI showcase, User experience enhancement'
const url = 'ui/ratings'

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
