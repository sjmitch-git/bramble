'use client'

import Button from '@/components/button'

import { XMarkIcon } from '@heroicons/react/24/solid'

interface ButtonProps {
	size?: string | undefined
	styles?: string | undefined
	onClick?: () => void | undefined
	disabled?: boolean | undefined
}

const CloseButton = ({ size = '', styles = '', onClick, disabled = false }: ButtonProps) => {
	return (
		<Button
			styles={`icon ${styles} ${size}`}
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

export default CloseButton
