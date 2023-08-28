export interface SelectProps extends React.HTMLAttributes<HTMLElement> {
	size?: 'sm' | 'lg'
	className?: string
	id?: string
	title?: string
	children: React.ReactNode
	value?: string
	onChange?: React.ChangeEventHandler<HTMLSelectElement>
	disabled?: boolean
	required?: boolean
	nocaret?: boolean
	labelStyles?: string
	label?: string
}
