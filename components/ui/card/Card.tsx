'use client'

import CardImage from './CardImage'
import CardBody from './CardBody'

import { CardProps } from './types'

const Card = ({
	className = '',
	title = '',
	description = '',
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
						title={title || description}
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

export {Card}
