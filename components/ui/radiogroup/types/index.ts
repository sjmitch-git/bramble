export interface RadioGroupProps extends React.HTMLAttributes<HTMLDivElement> {
	data: any[]
	getIcon?: (key: string) => void
	selected?: string
	icons?: boolean
	className?: string
	onChange?: React.ChangeEventHandler<HTMLInputElement>
	labelStyles?: string
	name?: string
}
