'use client'

import { createContext } from 'react'

interface DrawerContextProps {
	show: boolean
	setShow: (show: boolean) => void
	message: React.ReactNode
	setMessage: (message: React.ReactNode) => void
	state: string
	setState: (state: string) => void
	position: string
	setPosition: (position: string) => void
}

const initialState: DrawerContextProps = {
	show: false,
	setShow: () => {},
	message: '',
	setMessage: () => {},
	state: '',
	setState: () => {},
	position: '',
	setPosition: () => {},
}

export const DrawerContext = createContext<DrawerContextProps>(initialState)
