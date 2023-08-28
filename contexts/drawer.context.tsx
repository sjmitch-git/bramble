'use client'

import { createContext } from 'react'

import { DrawerProps } from '@/components/ui/drawer/types'

const initialState: DrawerProps = {
	show: false,
	setShow: () => {},
	message: '',
	setMessage: () => {},
	state: '',
	setState: () => {},
	position: '',
	setPosition: () => {},
}

export const DrawerContext = createContext<DrawerProps>(initialState)
