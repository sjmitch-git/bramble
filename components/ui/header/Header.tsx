import { HeaderProps } from './types'

export function Header({ className = '', children }: HeaderProps) {
	return <header className={`header ${className}`}>{children}</header>
}
