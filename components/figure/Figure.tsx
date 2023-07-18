interface FigureProps {
	className?: string | undefined
	children: React.ReactNode
	caption?: string | undefined
}

const Figure = ({ className = '', caption = '', children }: FigureProps) => {
	return (
		<figure className={`figure ${className}`}>
			{children}
			{caption && <figcaption className='figcaption'>{caption}</figcaption>}
		</figure>
	)
}

export default Figure
