import { createContext } from 'react'

import { ToastProps } from '@/types'

const initialState: ToastProps = {
	state: '',
	setState: () => {},
	body: '',
	setBody: () => {},
	position: '',
	setPosition: () => {},
	show: false,
	setShow: () => {},
	autohide: false,
	setAutohide: () => {},
}

export const ToastContext = createContext<ToastProps>(initialState)
