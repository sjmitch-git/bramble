interface FigureProps {
	styles?: string | undefined
	children: React.ReactNode
	caption?: string | undefined
}

const Figure = ({ styles = '', caption = '', children }: FigureProps) => {
	return (
		<figure className={`figure ${styles}`}>
			{children}
			{caption && <figcaption className='figcaption'>{caption}</figcaption>}
		</figure>
	)
}

export default Figure
