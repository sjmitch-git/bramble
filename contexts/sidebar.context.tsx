'use client'

import { createContext } from 'react'

import { SidebarProps } from '@/components/ui/sidebar/types'

const initialState: SidebarProps = {
	show: false,
	setShow: () => {},
	message: '',
	setMessage: () => {},
	state: '',
	setState: () => {},
	position: '',
	setPosition: () => {},
}

export const SidebarContext = createContext<SidebarProps>(initialState)
