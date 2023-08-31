'use client'

import { createContext } from 'react'

import { SidebarProps } from '@/types'

const initialState: SidebarProps = {
	show: false,
	setShow: () => {},
	body: '',
	setBody: () => {},
	state: '',
	setState: () => {},
	position: '',
	setPosition: () => {},
}

export const SidebarContext = createContext<SidebarProps>(initialState)
