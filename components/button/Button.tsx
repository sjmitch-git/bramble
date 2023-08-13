'use client'

import { forwardRef } from 'react'

import { Button as TButton } from '@/types'

export type Ref = HTMLButtonElement

export const Button = forwardRef<Ref, TButton>((props, ref) => {
	const {
		size = '',
		className = 'primary',
		type = 'button',
		title,
		id,
		disabled = undefined,
		onClick,
		onBlur,
		tabindex = undefined,
		role = 'button',
		children,
	} = props
	return (
		<button
			type={type}
			title={title}
			id={id}
			className={`btn ${size} ${className}`}
			disabled={disabled}
			tabIndex={tabindex}
			onClick={onClick}
			onBlur={onBlur}
			ref={ref}
			role={role}
		>
			{children}
		</button>
	)
})

Button.displayName = 'Button'
