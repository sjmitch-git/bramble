import Spinner from '@/components/spinner'
import Figure from '@/components/figure'

interface LoadingProps {
	styles?: string | undefined
	caption?: string | undefined
}

const Loading = ({ styles = '', caption = '' }: LoadingProps) => {
	return (
		<Figure styles={`loading ${styles}`} caption={caption}>
			<Spinner />
		</Figure>
	)
}

export default Loading
