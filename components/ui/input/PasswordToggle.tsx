import { Button } from '@/ui'

import { EyeIcon } from '@heroicons/react/24/solid'

interface PasswordToggleProps {
	onClick: (e: any) => void
}

export const PasswordToggle = ({ onClick }: PasswordToggleProps) => {
	return (
		<Button
			className='link absolute right-0 top-0 !p-0 active:!bg-transparent'
			size='sm'
			onClick={onClick}
			title='Toggle password visibility'
		>
			<EyeIcon />
			<span className='sr-only'>Toggle password visibility</span>
		</Button>
	)
}
