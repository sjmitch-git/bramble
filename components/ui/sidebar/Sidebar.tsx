'use client'

import { useContext, useState } from 'react'

import { SidebarContext } from '@/contexts/sidebar.context'

import { CloseButton } from '@/ui'

export function Sidebar() {
	const { show, setShow, message, state, position } = useContext(SidebarContext)
	const [touchPosition, setTouchPosition] = useState<number>(null!)

	const handleTouchStart = (e: React.TouchEvent<HTMLDivElement>) => {
		setTouchPosition(e.touches[0].clientX)
	}

	const handleTouchMove = (e: React.TouchEvent<HTMLDivElement>) => {
		if (touchPosition === null) return
		setShow(false)
		document.body.style.overflow = ''
		setTouchPosition(null!)
	}

	const close = () => {
		setShow(false)
		document.body.style.overflow = ''
	}

	return (
		<aside
			className={`sidebar ${show ? 'show' : ''} ${position} ${state}`}
			onTouchStart={handleTouchStart}
			onTouchMove={handleTouchMove}
		>
			<CloseButton
				onClick={close}
				className='circle icon absolute right-4 top-2 !p-0 !text-dark outline'
				size='sm'
			/>
			<div className='inner'>{message}</div>
		</aside>
	)
}
