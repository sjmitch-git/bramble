import useMetadata from '@/hooks/useMetadata'

import VideoTemplate from '@/templates/Video'

const title = 'Video'
const description =
	"Embed and showcase videos seamlessly with Bramble UI's video component. Enhance user engagement and create captivating web experiences."
const keywords =
	'Bramble UI video component, Seamless video embedding, User engagement enhancement, Captivating web experiences, Modern video integration, Web development resources, Interactive UI elements, Bramble UI showcase, Web content presentation, User experience optimization'
const url = 'ui/video'

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
