interface ButtonProps {
	size?: string | undefined
	styles?: string | undefined
	id?: string | undefined
	title?: string | undefined
	children: React.ReactNode
	onClick?: () => void | undefined
	type?: 'submit' | 'reset' | 'button' | undefined
	disabled?: boolean | undefined
	tabindex?: number | undefined
}

const Button = ({
	size = '',
	styles = 'primary',
	type = 'button',
	title,
	id,
	disabled = undefined,
	onClick,
	tabindex = undefined,
	children,
}: ButtonProps) => {
	return (
		<button
			type={type}
			title={title}
			id={id}
			className={`btn ${size} ${styles}`}
			disabled={disabled}
			tabIndex={tabindex}
			onClick={onClick}
		>
			{children}
		</button>
	)
}

export default Button
