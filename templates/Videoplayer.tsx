import { Codeblock, VideoPlayer } from '@/components'

const VideoplayerTemplate = () => {
	return (
		<>
			<h2>Usage</h2>
			<Codeblock language='jsx'>
				{`import {VideoPlayer} from '@/components'
                
<VideoPlayer
    src='https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4'
    formats={['mp4', 'webm']}
    poster='http://media.w3.org/2010/05/bunny/poster.png'
/>`}
			</Codeblock>
			<h2>Output</h2>
			<div className='mb-8 flex justify-center'>
				<VideoPlayer
					src='https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4'
					formats={['mp4', 'webm']}
					poster='http://media.w3.org/2010/05/bunny/poster.png'
				/>
			</div>
			<h2>Options</h2>
			<Codeblock language='jsx'>
				{`src: string
className?: string | undefined
formats?: any[] | undefined
poster?: string | undefined`}
			</Codeblock>
			<hr />
		</>
	)
}

export default VideoplayerTemplate
