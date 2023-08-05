'use client'

import { useContext, useState } from 'react'
import { ToastContext } from '@/contexts/toast.context'
import { Toast } from '@/components'

export default function ToastContextProvider({ children }: { children: React.ReactNode }) {
	const initialState = useContext(ToastContext)
	const [show, setShow] = useState(initialState.show)
	const [message, setMessage] = useState(initialState.message)
	const [state, setState] = useState(initialState.state)
	const [position, setPosition] = useState(initialState.position)
	const [autohide, setAutohide] = useState(initialState.autohide)
	const contextValues = {
		message,
		setMessage,
		show,
		setShow,
		state,
		setState,
		position,
		setPosition,
		autohide,
		setAutohide,
	}
	return (
		<ToastContext.Provider value={contextValues}>
			{children}
			<Toast />
		</ToastContext.Provider>
	)
}
