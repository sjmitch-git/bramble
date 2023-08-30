'use client'

import { useRef } from 'react'

import { SwitchProps } from './types'

export function Switch({
	label,
	className = '',
	onchange,
	checked,
	name,
	round = true,
	required = false,
	switchColor = 'info',
}: SwitchProps) {
	const checkbox = useRef<HTMLInputElement>(null!)
	const handleKeyup = (e: any) => {
		if (e.key !== 'Enter') return
		checkbox.current.checked = !checkbox.current.checked
	}
	return (
		<label
			className={`label switch ${className}`}
			onKeyUp={handleKeyup}
		>
			<span className='labeltext'>{label}</span>
			<input
				type='checkbox'
				name={name}
				onChange={onchange}
				required={required}
				defaultChecked={checked}
				ref={checkbox}
			/>
			<span className={`slider ${switchColor} ${round ? 'round' : 'square'}`}></span>
		</label>
	)
}
