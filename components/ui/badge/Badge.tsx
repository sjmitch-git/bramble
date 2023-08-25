interface BadgeProps {
	size?: string | undefined
	className?: string | undefined
	children?: React.ReactNode | undefined
}

export const Badge = ({ size = '', className = '', children = '' }: BadgeProps) => {
	return <small className={`badge ${className} ${size}`}>{children}</small>
}
