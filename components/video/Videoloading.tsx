import { Bars } from '@/components'

interface SpinnerProps {
	className?: string
}

const VideoLoading = ({ className = '' }: SpinnerProps) => {
	return (
		<div className={`loading ${className}`}>
			<div className={`innerloading w-24`}>
				<Bars className='text-warning w-full' />
			</div>
		</div>
	)
}

export default VideoLoading
