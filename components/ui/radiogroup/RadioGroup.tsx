'use client'

import { useEffect, useState } from 'react'

import { Input } from '@/ui'

import { RadioGroupProps } from './types'

export const RadioGroup = ({
	className = '',
	labelStyles = 'bg-white',
	data,
	name,
	getIcon,
	icons = false,
	onChange,
	selected,
}: RadioGroupProps) => {
	const [checked, setChecked] = useState('')

	useEffect(() => {
		if (selected) setChecked(selected)
	}, [selected])

	return (
		<div className={`radiogroup ${className} ${icons ? 'icons' : ''}`}>
			{data.map((item) => (
				<Input
					label={getIcon ? getIcon(item.id) : item.name}
					labelStyles={labelStyles}
					name={name}
					type='radio'
					value={item.id}
					key={item.id}
					onchange={onChange}
					checked={item.id === checked}
				/>
			))}
		</div>
	)
}
