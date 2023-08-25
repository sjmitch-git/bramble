import useMetadata from '@/hooks/useMetadata'

import VideoTemplate from '@/templates/Video'

const title = 'Video'
const description = 'Video description TBD'
const keywords = 'Video Component'
const url = 'components/video'

export let metadata: any

export default function Video() {
	metadata = useMetadata({ title, description, keywords, url })
	return (
		<>
			<h1>{title}</h1>
			<p>{description}</p>
			<div>
				<VideoTemplate />
			</div>
		</>
	)
}
