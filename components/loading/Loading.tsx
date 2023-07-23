import { Figure, Spinner } from '@/components'

interface LoadingProps {
	className?: string | undefined
	caption?: string | undefined
}

export const Loading = ({ className = '', caption = '' }: LoadingProps) => {
	return (
		<Figure
			className={`loading ${className}`}
			caption={caption}
		>
			<Spinner />
		</Figure>
	)
}
