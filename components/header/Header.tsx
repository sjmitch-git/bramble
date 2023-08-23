interface HeaderProps {
	className?: string
	children: React.ReactNode
}

export function Header({ className = '', children }: HeaderProps) {
	return <header className={`header ${className}`}>{children}</header>
}
