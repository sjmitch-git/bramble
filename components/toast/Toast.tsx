'use client'

import { useContext, useEffect } from 'react'
import useTimeout from '@/hooks/useTimeout'

import { ToastContext } from '@/contexts/toast.context'

import { CloseButton } from '@/components'

export function Toast() {
	const { state = '', show, setShow, message, position = '', autohide } = useContext(ToastContext)
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
					className='sm icon absolute right-1 top-1 bg-transparent p-0 shadow-none'
					onClick={() => setShow(false)}
				/>
			)}
			<div className='message'>{message}</div>
		</div>
	)
}
