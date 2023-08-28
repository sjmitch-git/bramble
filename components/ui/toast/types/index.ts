export interface ToastProps extends React.HTMLAttributes<HTMLDivElement> {
	state: string
	setState: (state: string) => void
	message: React.ReactNode
	setMessage: (message: React.ReactNode) => void
	position: string
	setPosition: (position: string) => void
	show: boolean
	setShow: (show: boolean) => void
	autohide: boolean
	setAutohide: (fadeout: boolean) => void
}
