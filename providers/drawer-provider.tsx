'use client'

import { useContext, useState } from 'react'
import { DrawerContext } from '@/contexts/drawer.context'
import { Drawer } from '@/ui'

export default function DrawerContextProvider({ children }: { children: React.ReactNode }) {
	const initialState = useContext(DrawerContext)
	const [show, setShow] = useState(initialState.show)
	const [body, setBody] = useState(initialState.body)
	const [state, setState] = useState(initialState.state)
	const [position, setPosition] = useState(initialState.position)
	const contextValues = {
		show,
		setShow,
		body,
		setBody,
		state,
		setState,
		position,
		setPosition,
	}
	return (
		<DrawerContext.Provider value={contextValues}>
			{children}
			<Drawer />
		</DrawerContext.Provider>
	)
}
