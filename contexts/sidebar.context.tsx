'use client'

import { createContext } from 'react'

interface SidebarContextProps {
	show: boolean
	setShow: (show: boolean) => void
	message: React.ReactNode
	setMessage: (message: React.ReactNode) => void
	state: string
	setState: (state: string) => void
	position: string
	setPosition: (position: string) => void
}

const initialState: SidebarContextProps = {
	show: false,
	setShow: () => {},
	message: '',
	setMessage: () => {},
	state: '',
	setState: () => {},
	position: '',
	setPosition: () => {},
}

export const SidebarContext = createContext<SidebarContextProps>(initialState)
