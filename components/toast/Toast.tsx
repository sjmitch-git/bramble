'use client'

import { useContext, useEffect } from 'react'
import useTimeout from '@/hooks/useTimeout'

import { ToastContext } from '@/contexts/toast.context'

import { CloseButton } from '@/components'

export function Toast() {
	const { state, show, setShow, message, position, autohide } = useContext(ToastContext)
	const [clear, reset] = useTimeout(() => setShow(false), 3000)

	useEffect(() => {
		if (show && autohide) clear()
		return () => {
			reset()
		}
	}, [show, setShow, autohide])

	return (
		<div
			className={`toast ${state} ${position} ${show ? 'show' : ''}`}
			id='toast'
			role='alert'
		>
			{!autohide && (
				<CloseButton
					className='sm circle icon absolute -right-2 -top-2 bg-transparent'
					onClick={() => setShow(false)}
				/>
			)}
			<div className='message'>{message}</div>
		</div>
	)
}
