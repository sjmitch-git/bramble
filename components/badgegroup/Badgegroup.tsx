import Badge from '@/components/badge'

import { StarIcon, HandThumbUpIcon, FaceSmileIcon } from '@heroicons/react/24/solid'

interface BadgegroupProps {
	className?: string | undefined
	badge?: string | undefined
	icon?: 'star' | 'smiley' | 'thumb' | undefined
	rating: number
	range: number
}

const Badgegroup = ({ className = '', rating, range, badge, icon = 'star' }: BadgegroupProps) => {
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

export default Badgegroup
