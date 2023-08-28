import { Figure } from '@/ui'

import { LoadingProps } from './types'

export const Loading = ({ className = 'w-10', caption = '', spinner }: LoadingProps) => {
	return (
		<Figure
			className={`loading ${className}`}
			caption={caption}
		>
			{spinner}
		</Figure>
	)
}
