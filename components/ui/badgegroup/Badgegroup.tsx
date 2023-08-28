import { Badge } from '@/ui'

import { StarIcon, HandThumbUpIcon, FaceSmileIcon } from '@heroicons/react/24/solid'

import { BadgegroupProps } from './types'

export const Badgegroup = ({
	className = '',
	rating,
	range,
	badge,
	icon = 'star',
}: BadgegroupProps) => {
	return (
		<div className={`badgegroup  ${className}`}>
			{[...new Array(range)].map((_el, index) => (
				<Badge
					className={`circle  icon border-none bg-transparent p-0 shadow-none ${
						rating <= index ? 'text-neutral' : badge
					}`}
					key={index}
				>
					{icon === 'smiley' ? (
						<FaceSmileIcon />
					) : icon === 'thumb' ? (
						<HandThumbUpIcon />
					) : (
						<StarIcon />
					)}
				</Badge>
			))}
		</div>
	)
}
