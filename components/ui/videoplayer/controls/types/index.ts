export interface VideoControlsProps {
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

export interface VideoFullscreenProps {
	fullscreen: boolean
	onFullscreen?: () => void | undefined
}

export interface VideoPlayProps {
	onPlay: () => void | undefined
	play: boolean
	onPause: () => void | undefined
	pause: boolean
}

export interface VideoSliderProps {
	time: number
	onTime?: (number: number) => void | undefined
	duration: number
	onScrubChange?: (number: number) => void | undefined
}

export interface VideoSoundProps {
	mute: boolean
	onMute: () => void
	onVolume: (number: number) => void | undefined
}

export interface VideoTimeProps {
	time: number
	duration: number
}
