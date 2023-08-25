import Navlinks from './Navlinks'

interface NavBarProps {
	className?: string | undefined
	children: React.ReactNode
}

export const Navbar = ({ className = '', children }: NavBarProps) => {
	return (
		<nav className={`navbar ${className}`}>
			{children}
			<Navlinks />
		</nav>
	)
}
