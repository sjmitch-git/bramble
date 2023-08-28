import { ArrowsPointingOutIcon, ArrowsPointingInIcon } from '@heroicons/react/24/solid'

import { Button, Buttongroup } from '@/ui'

import { VideoFullscreenProps } from './types'

const VideoFullscreen = ({ onFullscreen, fullscreen }: VideoFullscreenProps) => {
	return (
		<Buttongroup>
			{!fullscreen && (
				<Button
					className='sm dark'
					title='Fullscreen'
					onClick={onFullscreen}
				>
					<ArrowsPointingOutIcon />
					<span className='sr-only'>Fullscreen</span>
				</Button>
			)}
			{fullscreen && (
				<Button
					className='sm dark'
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
