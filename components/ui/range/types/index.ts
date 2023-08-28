export interface RangeProps extends React.HTMLAttributes<HTMLInputElement> {
	name?: string
	min?: number
	max?: number
	step?: number
	clr1?: string
	clr2?: string
	initial?: number
	onRangeChange: (number: number) => void | undefined
	vertical?: boolean
	className?: string
	label?: string
	labelStyles?: string
	feedback?: boolean
	feedbackMessage?: string
}
