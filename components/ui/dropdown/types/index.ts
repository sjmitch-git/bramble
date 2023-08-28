export interface LinksProps {
	href: string
	label: string
	links?: any[]
}

export interface DropdownProps extends React.HTMLAttributes<HTMLDivElement> {
	size?: string | undefined
	className?: string | undefined
	links: LinksProps[]
	button?: string | undefined
}