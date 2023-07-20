import { round } from '@smitch/js-lib'
import Badge from '@/components/badge'

import { StarIcon, HandThumbUpIcon, FaceSmileIcon, HeartIcon } from '@heroicons/react/24/solid'

interface RatingsProps {
	className?: string | undefined
	badge?: string | undefined
	icon?: 'star' | 'smiley' | 'thumb' | 'heart' | undefined
	rating: number
	range?: number | undefined
}

const Ratings = ({ className = '', rating, range, badge, icon = 'star' }: RatingsProps) => {
	rating = round(rating)
	if (rating === 0) rating = 1
	if (!range) range = rating
	return (
		<div className={`ratings  ${className}`}>
			{[...new Array(range)].map((_el, index) => (
				<Badge
					className={`${rating <= index ? 'text-neutral' : badge}`}
					key={index}
				>
					{icon === 'smiley' ? (
						<FaceSmileIcon />
					) : icon === 'thumb' ? (
						<HandThumbUpIcon />
					) : icon === 'heart' ? (
						<HeartIcon />
					) : (
						<StarIcon />
					)}
				</Badge>
			))}
			<p className='sr-only'>{`Rating: ${rating} out of ${range}`}</p>
		</div>
	)
}

export default Ratings