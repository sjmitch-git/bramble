export interface TwitterEmbedProps extends React.HTMLAttributes<HTMLDivElement> {
	handle: string
	limit?: number
	height?: number
	width?: number
	className?: string
	chrome?: string
	theme?: string
	status?: string
	lang?: string
}
