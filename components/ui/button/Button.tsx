'use client'

import { forwardRef } from 'react'

import { ButtonProps } from './types'

export type ButtonRef = HTMLButtonElement

const Button = forwardRef<ButtonRef, ButtonProps>(function Button(props, ref) {
	const {
		size,
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
			data-testid={id}
			className={`btn ${size ? size : ''} ${className}`}
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

export { Button }
