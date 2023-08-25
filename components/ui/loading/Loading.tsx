import { Figure } from '@/ui'

interface LoadingProps {
	className?: string | undefined
	caption?: string | undefined
	spinner?: React.ReactNode | undefined
}

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
