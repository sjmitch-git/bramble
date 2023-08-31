'use client'

import { useContext } from 'react'

import { DrawerContext } from '@/contexts/drawer.context'

export function Drawer() {
	const { show, body, state, position } = useContext(DrawerContext)

	return (
		<aside
			className={`drawer ${show ? 'show' : ''} ${position} ${state}`}
			role='alert'
		>
			<div className='body'>{body}</div>
		</aside>
	)
}
