import { TabProps } from './types'

export const Tab = ({ id, title, activeId, tabStyles = '', onclick }: TabProps) => {
	return (
		<button
			className={`tab ${tabStyles} ${id === activeId ? 'active' : ''}`}
			onClick={() => onclick(id)}
		>
			{title}
		</button>
	)
}
