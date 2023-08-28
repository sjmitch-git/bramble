export interface InputProps extends React.HTMLAttributes<HTMLLabelElement> {
	type?: string
	autocomplete?: string
	name?: string
	label?: React.ReactNode
	title?: string
	hint?: string
	placeholder?: string
	list?: string
	pattern?: string
	className?: string
	labelStyles?: string
	required?: boolean
	readonly?: boolean
	tabindex?: number
	min?: number | string
	max?: number | string
	accept?: string
	value?: any
	checked?: boolean
	hintShow?: boolean
	onchange?: React.ChangeEventHandler<HTMLInputElement>
	oninput?: React.ChangeEventHandler<HTMLInputElement>
}
