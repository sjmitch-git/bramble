export interface TableProps extends React.HTMLAttributes<HTMLDivElement> {
	className?: string
	data: any[]
	height?: number
	width?: number
	ignore?: string[]
	caption?: string
	dividers?: boolean
}