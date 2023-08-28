export interface FigureProps extends React.HTMLAttributes<HTMLElement> {
	className?: string
	children: React.ReactNode
	caption?: string | boolean
}
