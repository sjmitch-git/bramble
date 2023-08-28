export interface AutocompleteProps extends React.HTMLAttributes<HTMLInputElement> {
	data: any[]
	list: string
	name?: string
	autocomplete?: string
	label?: string
	required?: boolean
	placeholder?: string
	onchange?: React.ChangeEventHandler<HTMLInputElement>
}