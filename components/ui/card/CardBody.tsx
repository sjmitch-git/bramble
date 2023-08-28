import CardFooter from './CardFooter'
import { Badge } from '@/ui'

import { CardProps } from './types'

const CardBody = ({
	title,
	description,
	link,
	linkLabel,
	price,
	cc,
	rating,
	range,
	badge,
	badgeStyle,
}: CardProps) => {
	return (
		<div className='card-body'>
			<h5 className='title'>
				{title} {badge && <Badge className={badgeStyle}>{badge}</Badge>}
			</h5>
			<p className='card-message'>{description}</p>
			<CardFooter
				link={link}
				price={price}
				cc={cc}
				rating={rating}
				range={range}
				linkLabel={linkLabel}
			/>
		</div>
	)
}

export default CardBody
