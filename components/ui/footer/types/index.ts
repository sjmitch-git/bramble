export interface FooterProps extends React.HTMLAttributes<HTMLDivElement> {
	children?: React.ReactNode
	className?: string
	author?: string
	authorUrl?: string
	copyright?: boolean
	socialLinks?: any[]
	footerLinks?: any[]
	topButton?: boolean
}
