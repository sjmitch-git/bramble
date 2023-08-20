import { createContext } from 'react'

interface ToastContextProps {
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

const initialState: ToastContextProps = {
	state: '',
	setState: () => {},
	message: '',
	setMessage: () => {},
	position: '',
	setPosition: () => {},
	show: false,
	setShow: () => {},
	autohide: false,
	setAutohide: () => {},
}

export const ToastContext = createContext<ToastContextProps>(initialState)
