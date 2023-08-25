'use client'

import { useState, useEffect } from 'react'

interface RangeProps {
	name?: string
	min?: number
	max?: number
	step?: number
	clr1?: string
	clr2?: string
	initial?: number
	onRangeChange: (number: number) => void | undefined
	vertical?: boolean
	className?: string
}

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
				className={`range ${vertical ? 'vertical' : ''} ${className}`}
			/>
		</>
	)
}
