import { Tab as TTab } from '@/types'

export const Tab = ({ id, title, activeId, onclick }: TTab) => {
	return (
		<button
			className={`tab ${id === activeId ? 'active' : ''}`}
			onClick={() => onclick(id)}
		>
			{title}
		</button>
	)
}
