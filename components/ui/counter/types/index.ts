export interface CounterProps extends React.HTMLAttributes<HTMLDivElement> {
	name?: string
	min?: number
	max?: number
	value: number
	step?: number
	label?: string
	labelStyles?: string
	btnStyles?: string
	className?: string
	onCountChange: (count: number) => void
}
