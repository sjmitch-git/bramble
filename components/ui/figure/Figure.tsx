import {FigureProps} from './types'

export const Figure = ({ className = '', caption = '', children }: FigureProps) => {
	return (
		<figure className={`figure ${className}`}>
			{children}
			{caption && <figcaption className='figcaption'>{caption}</figcaption>}
		</figure>
	)
}
