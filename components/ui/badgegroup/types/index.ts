export interface BadgegroupProps extends React.HTMLAttributes<HTMLDivElement> {
	className?: string
	badge?: string
	icon?: 'star' | 'smiley' | 'thumb'
	rating: number
	range: number
}