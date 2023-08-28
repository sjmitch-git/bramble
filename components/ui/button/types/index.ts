export interface ButtonProps extends React.HTMLAttributes<HTMLButtonElement> {
	size?: string
	className?: string
	id?: string
	title?: string
	children?: React.ReactNode
	onClick?: (e: any) => void
	onBlur?: (e: any) => void
	type?: 'submit' | 'reset' | 'button'
	disabled?: boolean
	tabindex?: number
	role?: string
}
