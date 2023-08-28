interface DataProps {
	name: string
	src: string
	description: string
	link: string
}

export interface CarouselProps extends React.HTMLAttributes<HTMLDivElement> {
	data: DataProps[]
	className?: string | undefined
	theme?: string | undefined
	caption?: boolean | undefined
	autoplay?: boolean | undefined
	gallery?: boolean | undefined
	rtl?: boolean | undefined
}
