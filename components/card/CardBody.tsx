import CardFooter from './CardFooter'
import Badge from '@/components/badge'

interface CardBodyProps {
	title: string
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
}: CardBodyProps) => {
	return (
		<div className='card-body'>
			<h5 className='title'>
				{title} {badge && <Badge styles={badgeStyle}>{badge}</Badge>}
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
