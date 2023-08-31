export interface LabelProps extends React.HTMLAttributes<HTMLLabelElement> {
	labelStyles?: string
	children: React.ReactNode
	type?: string
	value?: any
	label?: React.ReactNode
    onToggleType: () => void
}
