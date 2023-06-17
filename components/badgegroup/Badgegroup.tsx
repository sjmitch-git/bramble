import Badge from '@/components/badge'

import { StarIcon, HandThumbUpIcon, FaceSmileIcon } from '@heroicons/react/24/solid'

interface BadgegroupProps {
	styles?: string | undefined
	badge?: string | undefined
	icon?: 'star' | 'smiley' | 'thumb' | undefined
	rating: number
	range: number
}

const Badgegroup = ({ styles = '', rating, range, badge, icon = 'star' }: BadgegroupProps) => {
	return (
		<div className={`badgegroup  ${styles}`}>
			{[...new Array(range)].map((_el, index) => (
				<Badge
					styles={`bg-transparent  border-none shadow-none circle p-0 icon ${
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
