'use client'

import CardImage from './CardImage'
import CardBody from './CardBody'

interface CardProps {
	className?: string | undefined
	title?: string | undefined
	description: string
	image?: string | undefined
	link: string
	linkLabel?: string | undefined
	price?: number | undefined
	cc?: string | undefined
	rating?: number | undefined
	range?: number | undefined
	layout?: 'row' | 'column' | 'full' | undefined
	badge?: string | undefined
	badgeStyle?: string | undefined
}

const Card = ({
	className = '',
	title = '',
	description,
	layout = 'column',
	link,
	linkLabel = 'More',
	image,
	price,
	cc,
	rating,
	range,
	badge,
	badgeStyle,
}: CardProps) => {
	return (
		<>
			<div className={`card ${layout} ${className}`}>
				{image && (
					<CardImage
						image={image}
						title={title}
					/>
				)}
				<CardBody
					title={title}
					description={description}
					link={link}
					linkLabel={linkLabel}
					price={price}
					cc={cc}
					rating={rating}
					range={range}
					badge={badge}
					badgeStyle={badgeStyle}
				/>
			</div>
		</>
	)
}

export default Card
