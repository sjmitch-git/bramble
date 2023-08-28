export type Tab = {
	id: string
	activeId?: string
	title: React.ReactNode | string
	tabStyles?: string | undefined
	onclick: (id: string) => void | undefined
} & React.HTMLAttributes<HTMLButtonElement>
