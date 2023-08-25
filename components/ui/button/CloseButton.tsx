'use client'

import { Button } from './Button'

import { XMarkIcon } from '@heroicons/react/24/solid'

interface ButtonProps {
	size?: string | undefined
	className?: string | undefined
	onClick?: () => void | undefined
	disabled?: boolean | undefined
}

export const CloseButton = ({
	size = '',
	className = '',
	onClick,
	disabled = false,
}: ButtonProps) => {
	return (
		<Button
			className={`icon ${className} ${size}`}
			onClick={onClick}
			title='Close'
			disabled={disabled}
			aria-label='Close'
		>
			<XMarkIcon />
			<span className='sr-only'>Close</span>
		</Button>
	)
}
