import Video from '@/components/video'
import Codeblock from '@/components/codeblock'

const VideoTemplate = () => {
	return (
		<>
			<h2>Usage</h2>
			<Codeblock language='jsx'>
				{`import Video from '@/components/video'
                
<Video
    src='https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4'
    formats={['mp4', 'webm']}
    title='Big Buck Bunny'
    poster='/poster.png'
/>`}
			</Codeblock>
			<h2>Output</h2>
			<div className='mb-8 flex justify-center'>
				<Video
					src='https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4'
					formats={['mp4', 'webm']}
				/>
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
    @apply relative w-full h-auto max-w-4xl;
}

.video {
    @apply w-full aspect-video bg-light;

    &[poster] {
        @apply object-cover;
    }
}`}
			</Codeblock>
		</>
	)
}

export default VideoTemplate
