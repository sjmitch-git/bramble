import { Bars } from '@/ui'

interface SpinnerProps {
	className?: string
}

const VideoLoading = ({ className = '' }: SpinnerProps) => {
	return (
		<div className={`loading ${className}`}>
			<div className={`innerloading w-24`}>
				<Bars className='w-full text-warning' />
			</div>
		</div>
	)
}

export default VideoLoading
