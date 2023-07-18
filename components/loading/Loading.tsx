import Spinner from '@/components/spinner'
import Figure from '@/components/figure'

interface LoadingProps {
	className?: string | undefined
	caption?: string | undefined
}

const Loading = ({ className = '', caption = '' }: LoadingProps) => {
	return (
		<Figure
			className={`loading ${className}`}
			caption={caption}
		>
			<Spinner />
		</Figure>
	)
}

export default Loading
