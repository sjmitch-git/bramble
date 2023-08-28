export interface DrawerProps extends React.HTMLAttributes<HTMLElement> {
	show: boolean
	setShow: (show: boolean) => void
	message: React.ReactNode
	setMessage: (message: React.ReactNode) => void
	state: string
	setState: (state: string) => void
	position: string
	setPosition: (position: string) => void
}
