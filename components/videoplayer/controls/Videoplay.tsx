import { PlayIcon, PauseIcon } from '@heroicons/react/24/solid'

import { Button, Buttongroup } from '@/components'

interface VideoPlayProps {
	onPlay: () => void | undefined
	play: boolean
	onPause: () => void | undefined
	pause: boolean
}

const VideoPlay = ({ onPlay, play = false, onPause }: VideoPlayProps) => {
	return (
		<Buttongroup>
			{!play && (
				<Button
					className='sm dark'
					title='Play'
					onClick={onPlay}
				>
					<PlayIcon />
					<span className='sr-only'>Play</span>
				</Button>
			)}
			{play && (
				<Button
					className='sm dark'
					onClick={onPause}
				>
					<PauseIcon />
					<span className='sr-only'>Pause</span>
				</Button>
			)}
		</Buttongroup>
	)
}

export default VideoPlay
