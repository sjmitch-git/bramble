import Spinner from '@/components/spinner'

interface SpinnerProps {
	styles?: string
}

const VideoLoading = ({ styles = '' }: SpinnerProps) => {
	return (
		<div className={`loading ${styles}`}>
			<div className={`innerloading w-24`}>
				<Spinner />
			</div>
		</div>
	)
}

export default VideoLoading
