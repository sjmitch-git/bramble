export interface ToastProps extends React.HTMLAttributes<HTMLDivElement> {
	state: string
	setState: (state: string) => void
	body: React.ReactNode
	setBody: (message: React.ReactNode) => void
	position: string
	setPosition: (position: string) => void
	show: boolean
	setShow: (show: boolean) => void
	autohide: boolean
	setAutohide: (fadeout: boolean) => void
}
