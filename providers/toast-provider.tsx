'use client'

import { useContext, useState } from 'react'
import { ToastContext } from '@/contexts/toast.context'
import { Toast } from '@/ui'

export default function ToastContextProvider({ children }: { children: React.ReactNode }) {
	const initialState = useContext(ToastContext)
	const [show, setShow] = useState(initialState.show)
	const [body, setBody] = useState(initialState.body)
	const [state, setState] = useState(initialState.state)
	const [position, setPosition] = useState(initialState.position)
	const [autohide, setAutohide] = useState(initialState.autohide)
	const contextValues = {
		body,
		setBody,
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
