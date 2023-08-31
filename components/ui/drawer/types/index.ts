export interface DrawerProps extends React.HTMLAttributes<HTMLElement> {
	show: boolean
	setShow: (show: boolean) => void
	body: React.ReactNode
	setBody: (message: React.ReactNode) => void
	state: string
	setState: (state: string) => void
	position: string
	setPosition: (position: string) => void
}
