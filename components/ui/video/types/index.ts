export interface VideoProps extends React.HTMLAttributes<HTMLVideoElement> {
	src: string
	className?: string | undefined
	formats?: any[] | undefined
	loop?: boolean | undefined
	controls?: boolean | undefined
	preload?: 'auto' | 'metadata' | 'none' | undefined
	poster?: string | undefined
	fallback?: string | undefined
	play?: boolean | undefined
	onPlay?: () => void | undefined
	pause?: boolean | undefined
	onPause?: () => void | undefined
	onEnd?: () => void | undefined
	onDuration?: (number: number) => void | undefined
	currentTime?: number | undefined
	onTime?: (number: number) => void | undefined
	fullscreen?: boolean
	mute?: boolean
	volume?: number
}
