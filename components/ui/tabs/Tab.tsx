import { Tab as TTab } from '@/types'

export const Tab = ({ id, title, activeId, tabStyles = '', onclick }: TTab) => {
	return (
		<button
			className={`tab ${tabStyles} ${id === activeId ? 'active' : ''}`}
			onClick={() => onclick(id)}
		>
			{title}
		</button>
	)
}
