export interface RatingsProps extends React.HTMLAttributes<HTMLDivElement> {
	className?: string
	badge?: string
	icon?: 'star' | 'smiley' | 'thumb' | 'heart'
	rating: number
	range?: number
}
