'use client'

import { useState, useEffect } from 'react'

import { RangeProps } from './types'

export const Range = ({
	onRangeChange,
	name,
	min = 0,
	max = 100,
	initial = 0,
	step = 1,
	clr1 = '#f59e0b',
	clr2 = '#9e9e9e',
	vertical = false,
	className = '',
	label,
	labelStyles = '',
	feedback,
	feedbackMessage = 'Range',
}: RangeProps) => {
	const [scrubRange, setScrubRange] = useState(initial)
	const [modifier, setModifier] = useState(1)

	useEffect(() => {
		setModifier(100 / max)
	}, [max])

	const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
		setScrubRange(Number(event.target.value))
		onRangeChange(scrubRange)
	}

	const handlePointerUp = (event: React.PointerEvent<HTMLInputElement>) => {
		setScrubRange(Number((event.target as HTMLInputElement).value))
		onRangeChange(scrubRange)
	}

	let scrubStyle = {
		backgroundImage: `linear-gradient(to right, ${clr1} 0%, ${clr1} ${
			scrubRange * modifier
		}%, ${clr2} ${scrubRange * modifier}%, ${clr2} 100%)`,
		color: `${clr1}`,
	}

	return (
		<>
			<div className='range'>
				<label className={`label ${labelStyles} ${vertical ? 'vertical' : ''}`}>
					{label && <span>{label}</span>}
					<input
						type='range'
						name={name}
						min={min}
						max={max}
						step={step}
						value={scrubRange}
						onChange={handleChange}
						onPointerUp={handlePointerUp}
						style={scrubStyle}
						className={`rangeInput input ${className}`}
					/>
				</label>
				{feedback && (
					<p className='feedback'>
						{feedbackMessage}: {scrubRange}
					</p>
				)}
			</div>
		</>
	)
}
