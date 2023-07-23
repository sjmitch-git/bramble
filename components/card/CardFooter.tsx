import Link from 'next/link'
import { Ratings } from '@/components'
import { formatCurrency } from '@smitch/js-lib'

interface CardFooterProps {
	link: string
	linkLabel?: string | undefined
	price?: number | undefined
	cc?: string | undefined
	rating?: number | undefined
	range?: number | undefined
}

const CardFooter = ({ rating, range, link, linkLabel = 'Moxxre', price, cc }: CardFooterProps) => {
	return (
		<footer className='card-footer'>
			{rating && (
				<Ratings
					rating={rating}
					range={range}
					badge='text-warning'
				/>
			)}
			<div className='ms-auto'>
				{!price && (
					<Link
						href={link}
						// target='_blank'
						target={link.startsWith('https://') ? '_blank' : '_self'}
					>
						{linkLabel}
					</Link>
				)}
				{price && cc && <Link href={link}>{formatCurrency(price, cc, 'symbol')}</Link>}
			</div>
		</footer>
	)
}

export default CardFooter
