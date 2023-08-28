export interface FooterProps extends React.HTMLAttributes<HTMLDivElement> {
	children?: React.ReactNode
	className?: string
	author?: string | null
	authorUrl?: string | null
	copyright?: boolean
	socialLinks?: any[]
	footerLinks?: any[]
	topButton?: boolean
}
