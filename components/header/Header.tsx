interface HeaderProps {
	className?: string
	children: React.ReactNode
}

const Header = ({ className = '', children }: HeaderProps) => {
	return <header className={`header ${className}`}>{children}</header>
}

export default Header
