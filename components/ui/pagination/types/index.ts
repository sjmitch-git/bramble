export interface PaginationProps extends React.HTMLAttributes<HTMLElement> {
	className?: string
	size?: string
	page: string
	onChange: (e: any) => void
	theme?: 'dark' | 'light'
	range: number
	results: number
	feedback?: boolean
	vertical?: boolean
	icons?: boolean
	minimal?: boolean
}