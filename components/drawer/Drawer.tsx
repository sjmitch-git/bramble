'use client'

import { useContext } from 'react'

import { DrawerContext } from '@/contexts/drawer.context'

export function Drawer() {
	const { show, message, state, position } = useContext(DrawerContext)

	return (
		<aside
			className={`drawer ${show ? 'show' : ''} ${position} ${state}`}
			role='alert'
		>
			<div className='message'>{message}</div>
		</aside>
	)
}
