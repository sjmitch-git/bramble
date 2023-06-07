interface ButtongroupProps {
	size?: string | undefined
	styles?: string | undefined
	label?: string | undefined
	children: React.ReactNode
}

const Buttongroup = ({
	size = '',
	styles = '',
	label = 'Button group',
	children,
}: ButtongroupProps) => {
	return (
		<div
			className={`btn-group ${size} ${styles}`}
			role='group'
			aria-label={label}
		>
			{children}
		</div>
	)
}

export default Buttongroup
