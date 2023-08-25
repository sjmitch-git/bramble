import useMetadata from '@/hooks/useMetadata'

import LoadingTemplate from '@/templates/Loading'

const title = 'Loading'
const description = 'Loading description TBD'
const keywords = 'Loading Component'
const url = 'components/loading'

export let metadata: any

export default function Loading() {
	metadata = useMetadata({ title, description, keywords, url })
	return (
		<>
			<h1>{title}</h1>
			<p>{description}</p>
			<div>
				<LoadingTemplate />
			</div>
		</>
	)
}
