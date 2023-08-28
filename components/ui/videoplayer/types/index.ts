export interface VideoPlayerProps extends React.HTMLAttributes<HTMLDivElement> {
	src: string
	poster?: string
	className?: string
	formats?: any[]
}
