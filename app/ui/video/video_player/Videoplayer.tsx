import useMetadata from '@/hooks/useMetadata'

import VideoPlayerTemplate from '@/templates/Videoplayer'

const title = 'Video Player'
const description = 'Video Player with custom controls'
const keywords = 'Video Player Component'
const url = 'components/video/video_player'

export let metadata: any

export default function Videoplayer() {
	metadata = useMetadata({ title, description, keywords, url })
	return (
		<>
			<h1>{title}</h1>
			<p>{description}</p>
			<div>
				<VideoPlayerTemplate />
			</div>
		</>
	)
}
