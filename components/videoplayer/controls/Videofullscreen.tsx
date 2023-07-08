import { ArrowsPointingOutIcon, ArrowsPointingInIcon } from '@heroicons/react/24/solid'

import Button from '@/components/button'
import Buttongroup from '@/components/buttongroup'

interface VideoFullscreenProps {
	fullscreen: boolean
	onFullscreen?: () => void | undefined
}

const VideoFullscreen = ({ onFullscreen, fullscreen }: VideoFullscreenProps) => {
	return (
		<Buttongroup>
			{!fullscreen && (
				<Button
					styles='dark sm'
					title='Fullscreen'
					onClick={onFullscreen}
				>
					<ArrowsPointingOutIcon />
					<span className='sr-only'>Fullscreen</span>
				</Button>
			)}
			{fullscreen && (
				<Button
					styles='dark sm'
					title='Exit Fullscreen'
					onClick={onFullscreen}
				>
					<ArrowsPointingInIcon />
					<span className='sr-only'>Exit Fullscreen</span>
				</Button>
			)}
		</Buttongroup>
	)
}

export default VideoFullscreen
