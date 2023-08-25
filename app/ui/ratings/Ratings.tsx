import useMetadata from '@/hooks/useMetadata'

import RatingsTemplate from '@/templates/Ratings'

const title = 'Ratings'
const description =
	"Fine-tune user input with Bramble UI's range component. Create interactive web interfaces with modern range sliders for precise selections."
const keywords =
	'Bramble UI range component, Fine-tune user input, Interactive web interfaces, Modern range sliders, User-friendly design, Web development resources, Interactive UI elements, Bramble UI showcase, Precise user selections, Web form optimization'
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
