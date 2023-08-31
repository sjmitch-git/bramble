'use client'

import { createContext } from 'react'

import { DrawerProps } from '@/types'

const initialState: DrawerProps = {
	show: false,
	setShow: () => {},
	body: '',
	setBody: () => {},
	state: '',
	setState: () => {},
	position: '',
	setPosition: () => {},
}

export const DrawerContext = createContext<DrawerProps>(initialState)
