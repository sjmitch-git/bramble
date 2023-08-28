import { createContext } from 'react'

import { ToastProps } from '@/components/ui/toast/types'

const initialState: ToastProps = {
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

export const ToastContext = createContext<ToastProps>(initialState)
