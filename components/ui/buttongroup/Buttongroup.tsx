import { ButtongroupProps } from './types'

export const Buttongroup = ({
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
