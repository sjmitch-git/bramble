import Video from '@/components/video'
import Codeblock from '@/components/codeblock'

const VideoTemplate = () => {
	return (
		<>
			<h2>Usage</h2>
			<Codeblock language='jsx'>
				{`import Video from '@/components/video'

<div className='video-wrapper'>           
	<Video
		src='https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4'
		formats={['mp4', 'webm']}
		poster='http://media.w3.org/2010/05/bunny/poster.png'
	/>
</div>`}
			</Codeblock>
			<h2>Output</h2>
			<div className='mb-8 flex justify-center'>
				<div className='video-wrapper'>
					<Video
						src='https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4'
						formats={['mp4', 'webm']}
						poster='http://media.w3.org/2010/05/bunny/poster.png'
					/>
				</div>
			</div>
			<h2>Props</h2>
			<Codeblock language='jsx'>
				{`src: string
styles?: string | undefined
formats?: any[] | undefined
loop?: boolean | undefined
controls?: boolean | undefined
preload?: 'auto' | 'metadata' | 'none' | undefined
poster?: string | undefined
fallback?: string | undefined`}
			</Codeblock>
			<h2>CSS</h2>
			<Codeblock language='css'>
				{`.video-wrapper {
    @apply relative w-full h-auto max-w-4xl bg-dark aspect-video;
}

.video {
    @apply w-full aspect-video bg-dark;

    &[poster] {
        @apply object-cover;
    }
}`}
			</Codeblock>
		</>
	)
}

export default VideoTemplate
