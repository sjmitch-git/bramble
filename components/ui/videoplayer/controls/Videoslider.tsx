import { useState, useEffect } from 'react'

import { VideoSliderProps } from './types'

const VideoSlider = ({ time, onTime, duration, onScrubChange }: VideoSliderProps) => {
	useEffect(() => {
		if (time) setScrubRange((time / duration) * 100)
	}, [time, duration])

	const [scrubRange, setScrubRange] = useState(0)

	const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
		setScrubRange(Number(event.target.value))
		if (onTime) onTime((scrubRange * duration) / 100)
		if (onScrubChange) onScrubChange((scrubRange * duration) / 100)
	}

	const scrubClr1 = '#fff'
	const scrubClr2 = '#333'

	let scrubStyle = {
		backgroundImage: `linear-gradient(to right, ${scrubClr1} 0%, ${scrubClr1} ${scrubRange}%, ${scrubClr2} ${scrubRange}%, ${scrubClr2} 100%)`,
	}

	return (
		<div className='scrub-slider'>
			<input
				type='range'
				min='0'
				max='100'
				step='any'
				id='scrubRange'
				value={scrubRange}
				onChange={handleChange}
				style={scrubStyle}
			/>
		</div>
	)
}

export default VideoSlider
