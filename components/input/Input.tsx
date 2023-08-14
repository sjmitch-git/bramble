'use client'

import { forwardRef, useState } from 'react'

import { PasswordToggle } from '@/components'

import { Input as TInput } from '@/types'

export type InputRef = HTMLInputElement

export const Input = forwardRef<InputRef, TInput>(function Input(props, ref) {
	const {
		type = 'text',
		autocomplete,
		name,
		className = '',
		labelStyles = '',
		label,
		required,
		readonly = false,
		tabindex,
		min,
		max,
		pattern,
		title,
		hint,
		value,
		checked,
		hintShow,
		accept,
		placeholder,
		list,
		onchange,
		hidden,
	} = props

	const [toggletype, setToggleType] = useState(type)

	const toggleType = () =>
		toggletype === 'password' ? setToggleType('text') : setToggleType('password')

	return (
		<label
			className={`label ${labelStyles} ${
				type === 'checkbox' || type === 'radio' || type === 'color' ? 'row' : ''
			}`}
		>
			<span className={type}>
				{label || value} {type === 'password' && <PasswordToggle onClick={toggleType} />}
			</span>
			<input
				type={toggletype || type}
				name={name}
				autoComplete={autocomplete}
				required={required}
				hidden={hidden}
				readOnly={readonly}
				tabIndex={tabindex}
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
				onInput={onchange}
				data-testid='input'
			/>
			{hint && <div className={`hint ${hintShow ? 'show' : ''}`}>{hint}</div>}
		</label>
	)
})
