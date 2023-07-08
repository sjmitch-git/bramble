import { PlayIcon, PauseIcon } from '@heroicons/react/24/solid'

import Button from '@/components/button'
import Buttongroup from '@/components/buttongroup'

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
					styles='dark sm'
					title='Play'
					onClick={onPlay}
				>
					<PlayIcon />
					<span className='sr-only'>Play</span>
				</Button>
			)}
			{play && (
				<Button
					styles='dark sm'
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
