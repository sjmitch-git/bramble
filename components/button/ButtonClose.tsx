import Button from '@/components/button'

import { XMarkIcon } from '@heroicons/react/24/solid'

interface ButtonProps {
	size?: string | undefined
	styles?: string | undefined
	onClick?: () => void | undefined
	disabled?: boolean | undefined
}

const ButtonClose = ({ size = '', styles = '', onClick, disabled = false }: ButtonProps) => {
	return (
		<Button
			styles={`icon circle ${styles} ${size}`}
			onClick={onClick}
			title='Close'
			id='closebutton'
			disabled={disabled}
		>
			<XMarkIcon />
			<span className='sr-only'>Close</span>
		</Button>
	)
}

export default ButtonClose
