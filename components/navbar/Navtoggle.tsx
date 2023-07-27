import { Button } from '@/components'
import { Bars3Icon } from '@heroicons/react/24/solid'

interface NavToggleProps {
	onClick?: (e: any) => void | undefined
	open: boolean
}

const NavToggle = ({ onClick, open = false }: NavToggleProps) => {
	return (
		<div className='toggler'>
			<Button
				className={`solid secondary circle icon sm transition-all ${
					open ? 'rotate-90' : 'rotate-0'
				}`}
				onClick={onClick}
			>
				<Bars3Icon />
				<span className='sr-only'>Toggle Sidebar</span>
			</Button>
		</div>
	)
}

export default NavToggle
