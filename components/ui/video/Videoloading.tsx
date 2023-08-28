import { Bars } from '@/ui'

import {SpinnerProps} from './types'

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
