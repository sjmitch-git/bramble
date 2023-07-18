interface BadgeProps {
	size?: string | undefined
	className?: string | undefined
	children?: React.ReactNode | undefined
}

const Badge = ({ size = '', className = '', children = '' }: BadgeProps) => {
	return <small className={`badge ${className} ${size}`}>{children}</small>
}

export default Badge
