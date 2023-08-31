import useMetadata from '@/hooks/useMetadata'
import useSchemaMarkup from '@/hooks/useSchemaMarkup'

import VideoPlayerTemplate from '@/templates/Videoplayer'

const title = 'Video Player'
const description =
	"Enhance media experiences with Bramble UI's video player component. Create engaging web interfaces with modern video playback and controls."
const keywords =
	'Bramble UI video player, Media experience enhancement, Modern video playback, Engaging web interfaces, Video controls, User-friendly design, Web development resources, Interactive UI elements, Bramble UI showcase, Multimedia integration'
const url = 'ui/video/video_player'

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
			<script
				type='application/ld+json'
				dangerouslySetInnerHTML={{
					__html: useSchemaMarkup({ title, description, url }),
				}}
				key='jsonld'
			/>
		</>
	)
}
