export interface TabsProps extends React.HTMLAttributes<HTMLButtonElement> {
	className?: string
	tabStyles?: string
	children: React.ReactNode
	defaultActiveId?: string
	icons?: React.ReactNode[]
	minimal?: boolean
}

export interface TabProps {
	id: string
	activeId?: string
	title: React.ReactNode | string
	tabStyles?: string | undefined
	onclick: (id: string) => void | undefined
}

export interface TabBarProps {
	className?: string
	tabStyles?: string
	defaultActiveId?: string
	tabs: TabProps[]
	activeId: string
	onclick: (id: string) => void | undefined
}
