import useMetadata from '@/hooks/useMetadata'

import FigureTemplate from '@/templates/Figure'

const title = 'Figure'
const description = 'Figure description TBD'
const keywords = 'Figure Component'
const url = 'components/figure'

export let metadata: any

export default function Figure() {
	metadata = useMetadata({ title, description, keywords, url })
	return (
		<>
			<h1>{title}</h1>
			<p>{description}</p>
			<div>
				<FigureTemplate />
			</div>
		</>
	)
}
