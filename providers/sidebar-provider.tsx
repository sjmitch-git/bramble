'use client'

import { useContext, useState } from 'react'
import { SidebarContext } from '@/contexts/sidebar.context'
import { Sidebar } from '@/ui'

export default function SidebarContextProvider({ children }: { children: React.ReactNode }) {
	const initialState = useContext(SidebarContext)
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
		<SidebarContext.Provider value={contextValues}>
			{children}
			<Sidebar />
		</SidebarContext.Provider>
	)
}
