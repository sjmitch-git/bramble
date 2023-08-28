import { round } from '@smitch/js-lib'
import { Badge } from '@/ui'

import { StarIcon, HandThumbUpIcon, FaceSmileIcon, HeartIcon } from '@heroicons/react/24/solid'

import { RatingsProps } from './types'

export const Ratings = ({ className = '', rating, range, badge, icon = 'star' }: RatingsProps) => {
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
