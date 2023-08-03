'use client'

import { useRef, useState } from 'react'

import { Button } from '@/components'

import { EyeIcon } from '@heroicons/react/24/solid'

interface InputProps {
	type?: string
	autocomplete?: string
	name?: string
	label?: string
	title?: string
	hint?: string
	placeholder?: string
	list?: string
	pattern?: string
	className?: string | undefined
	labelStyles?: string | undefined
	required?: boolean
	min?: number | string
	max?: number | string
	accept?: string
	value?: any
	checked?: boolean
	onchange?: React.ChangeEventHandler<HTMLInputElement>
}

export const Input = ({
	type = 'text',
	autocomplete,
	name,
	className = '',
	labelStyles = '',
	label,
	required,
	min,
	max,
	pattern,
	title,
	hint,
	value,
	checked,
	accept,
	placeholder,
	list,
	onchange,
}: InputProps) => {
	const ref = useRef<HTMLInputElement>(null!)

	const [toggletype, setToggleType] = useState(type)

	const toggleType = () => {
		const currenttype = ref.current.type
		if (currenttype === 'password') ref.current.type = 'text'
		else ref.current.type = 'password'
		setToggleType(ref.current.type)
	}

	return (
		<label
			className={`label ${labelStyles} ${
				type === 'checkbox' || type === 'radio' || type === 'color' ? 'row' : ''
			}`}
		>
			<span className={type}>
				{label || value}{' '}
				{type === 'password' && (
					<Button
						className='link absolute right-0 top-0 !p-0 active:!bg-transparent'
						size='sm'
						onClick={toggleType}
						title='Toggle password visibility'
					>
						<EyeIcon />
						<span className='sr-only'>Toggle password visibility</span>
					</Button>
				)}
			</span>
			<input
				type={toggletype || type}
				name={name}
				autoComplete={autocomplete}
				required={required}
				className={`input ${className} ${
					type === 'checkbox'
						? 'form-checkbox'
						: type === 'radio'
						? 'form-radio'
						: type === 'color'
						? 'form-color'
						: 'form-input'
				}`}
				ref={ref}
				min={min}
				max={max}
				pattern={pattern}
				title={title}
				placeholder={placeholder}
				defaultValue={value}
				defaultChecked={checked}
				accept={accept}
				list={list}
				onChange={onchange}
			/>
			{hint && <div className='hint'>{hint}</div>}
		</label>
	)
}

export default Input
