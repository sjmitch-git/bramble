interface DataProps {
	id: string
	title: string
	body: string
}

export interface AccordionProps extends React.HTMLAttributes<HTMLDivElement> {
	size?: 'sm' | 'lg'
	className?: string
	onClick?: () => void
	data: DataProps[]
	opened?: string
	layout?: 'flush' | 'spaced'
}
