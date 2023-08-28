import Link from 'next/link'
import { Ratings } from '@/ui'
import { formatCurrency } from '@smitch/js-lib'

import { CardProps } from './types'

const CardFooter = ({ rating, range, link = '', linkLabel = 'More', price, cc }: CardProps) => {
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
