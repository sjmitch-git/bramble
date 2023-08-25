import VideoFullscreen from './Videofullscreen'
import VideoTime from './Videotime'
import VideoPlay from './Videoplay'
import VideoSlider from './Videoslider'
import VideoSound from './Videosound'

interface VideoControlsProps {
	onPlay: () => void | undefined
	play: boolean
	onPause: () => void | undefined
	pause: boolean
	time: number
	onTime?: (number: number) => void | undefined
	duration: number
	onScrubChange?: (number: number) => void | undefined
	fullscreen: boolean
	onFullscreen?: () => void | undefined
	mute: boolean
	onMute: () => void | undefined
	onVolume: (number: number) => void | undefined
	volume: number
}

const VideoControls = ({
	onPlay,
	play = false,
	onPause,
	pause = false,
	time,
	onTime,
	duration = 0,
	onScrubChange,
	onFullscreen,
	fullscreen,
	mute,
	onMute,
	onVolume,
}: VideoControlsProps) => {
	return (
		<div className='controls'>
			{(play || pause) && (
				<VideoSlider
					time={time}
					duration={duration}
					onTime={onTime}
					onScrubChange={onScrubChange}
				/>
			)}
			<div className='inner'>
				<VideoPlay
					play={play}
					onPlay={onPlay}
					pause={pause}
					onPause={onPause}
				/>

				<div className='flex items-center gap-4'>
					<VideoTime
						time={time}
						duration={duration}
					/>
					<VideoSound
						mute={mute}
						onMute={onMute}
						onVolume={onVolume}
					/>
					<VideoFullscreen
						fullscreen={fullscreen}
						onFullscreen={onFullscreen}
					/>
				</div>
			</div>
		</div>
	)
}

export default VideoControls
