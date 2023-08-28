import Navlinks from './Navlinks'

import { NavBarProps } from './types'

export const Navbar = ({ className = '', children }: NavBarProps) => {
	return (
		<nav className={`navbar ${className}`}>
			{children}
			<Navlinks />
		</nav>
	)
}
