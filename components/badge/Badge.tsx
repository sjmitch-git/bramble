interface BadgeProps {
	size?: string | undefined
	styles?: string | undefined
	children?: React.ReactNode | undefined
}

const Badge = ({ size = '', styles = '', children='' }: BadgeProps) => {
	return <small className={`badge ${styles} ${size}`}>{children}</small>
}

export default Badge
