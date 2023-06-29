'use client'

import { forwardRef } from 'react'

interface ButtonProps {
	size?: string | undefined
	styles?: string | undefined
	id?: string | undefined
	title?: string | undefined
	children: React.ReactNode
	onClick?: (e: any) => void | undefined
	onBlur?: (e: any) => void | undefined
	type?: 'submit' | 'reset' | 'button' | undefined
	disabled?: boolean | undefined
	tabindex?: number | undefined
}

export type Ref = HTMLButtonElement

const Button = forwardRef<Ref, ButtonProps>((props, ref) => {
	const {
		size = '',
		styles = 'primary',
		type = 'button',
		title,
		id,
		disabled = undefined,
		onClick,
		onBlur,
		tabindex = undefined,
		children,
	} = props
	return (
		<button
			type={type}
			title={title}
			id={id}
			className={`btn ${size} ${styles}`}
			disabled={disabled}
			tabIndex={tabindex}
			onClick={onClick}
			onBlur={onBlur}
			ref={ref}
		>
			{children}
		</button>
	)
})

Button.displayName = 'Button'

export default Button
