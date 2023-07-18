import Spinner from '@/components/spinner'

interface SpinnerProps {
	className?: string
}

const VideoLoading = ({ className = '' }: SpinnerProps) => {
	return (
		<div className={`loading ${className}`}>
			<div className={`innerloading w-24`}>
				<Spinner />
			</div>
		</div>
	)
}

export default VideoLoading
