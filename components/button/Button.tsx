'use client'

import { forwardRef } from 'react'

interface ButtonProps {
	size?: string | undefined
	className?: string | undefined
	id?: string | undefined
	title?: string | undefined
	children: React.ReactNode
	onClick?: (e: any) => void | undefined
	onBlur?: (e: any) => void | undefined
	type?: 'submit' | 'reset' | 'button' | undefined
	disabled?: boolean | undefined
	tabindex?: number | undefined
	role?: string | undefined
}

export type Ref = HTMLButtonElement

export const Button = forwardRef<Ref, ButtonProps>((props, ref) => {
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
