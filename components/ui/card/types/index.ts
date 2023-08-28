export interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
	className?: string
	title?: string
	description?: string
	image?: string
	link?: string
	linkLabel?: string
	price?: number
	cc?: string
	rating?: number
	range?: number
	layout?: 'row' | 'column' | 'full'
	badge?: string
	badgeStyle?: string
}
