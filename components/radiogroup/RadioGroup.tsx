'use client'

import { useEffect, useState } from 'react'

import { Input } from '@/components'

import { Input as TInput } from '@/types'

interface Props {
	data: any[]
	getIcon?: (key: string) => void
	selected?: string
	icons?: boolean | undefined
}

interface TRadioGroup extends TInput, Props {}

export const RadioGroup = ({
	className = '',
	labelStyles = 'bg-white',
	data,
	name,
	getIcon,
	icons = false,
	onChange,
	selected,
}: TRadioGroup) => {
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
