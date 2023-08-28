export interface SwitchProps extends React.HTMLAttributes<HTMLElement> {
	name?: string
	label?: string
	className?: string | undefined
	switchColor?: string | undefined
	required?: boolean
	checked?: boolean
	round?: boolean | undefined
	onchange?: React.ChangeEventHandler<HTMLInputElement>
}