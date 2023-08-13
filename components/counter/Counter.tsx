'use client'

import { useState, useRef, useEffect, ReactEventHandler } from 'react'
import { PlusIcon, MinusIcon } from '@heroicons/react/24/solid'

import { Input, Button } from '@/components'

interface CounterProps {
	name?: string
	min?: number
	max?: number
	value: number
	step?: number
	label?: string | undefined
	labelStyles?: string | undefined
	btnStyles?: string | undefined
	className?: string | undefined
	onCountChange: (count: number) => void
}

export const Counter = ({
	name = 'number',
	label,
	labelStyles,
	btnStyles = 'icon circle dark outline',
	className = '',
	min = 0,
	max,
	value,
	step = 1,
	onCountChange,
}: CounterProps) => {
	const [total, setTotal] = useState(value)
	const input = useRef<HTMLInputElement>(null!)

	const plus = () => {
		setTotal((total) => total + step)
		onCountChange(total + step)
		input.current.valueAsNumber = total + step
	}

	const minus = () => {
		setTotal((total) => total - step)
		onCountChange(total - step)
		input.current.valueAsNumber = total - step
	}

	const handleChange = (e: any) => {
		setTotal(e.target.valueAsNumber)
		onCountChange(e.target.valueAsNumber)
	}

	return (
		<div className={`counter ${className}`}>
			<Button
				className={btnStyles}
				disabled={total === min}
				size='sm'
				onClick={minus}
				aria-label='Minus'
			>
				<MinusIcon />
				<span className='sr-only'>Minus</span>
			</Button>
			<Input
				name={name}
				type='number'
				max={max}
				min={min}
				value={total}
				ref={input}
				onchange={handleChange}
			/>
			<Button
				className={btnStyles}
				disabled={total === max}
				size='sm'
				onClick={plus}
				aria-label='Add'
			>
				<PlusIcon />
				<span className='sr-only'>Add</span>
			</Button>
			<div className={`label ${labelStyles}`}>{label}</div>
		</div>
	)
}
