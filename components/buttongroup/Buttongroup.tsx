interface ButtongroupProps {
	size?: string | undefined
	className?: string | undefined
	label?: string | undefined
	children: React.ReactNode
}

const Buttongroup = ({
	size = '',
	className = '',
	label = 'Button group',
	children,
}: ButtongroupProps) => {
	return (
		<div
			className={`btn-group ${size} ${className}`}
			role='group'
			aria-label={label}
		>
			{children}
		</div>
	)
}

export default Buttongroup
