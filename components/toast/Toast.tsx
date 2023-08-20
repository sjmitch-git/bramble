'use client'

import { useContext, useEffect } from 'react'
import useTimeout from '@/hooks/useTimeout'

import { ToastContext } from '@/contexts/toast.context'

import { CloseButton } from '@/components'

export function Toast() {
	const {
		state = '',
		show,
		setShow,
		message,
		position = '',
		autohide = false,
	} = useContext(ToastContext)
	const [clear, reset] = useTimeout(() => setShow(false), 3000)

	useEffect(() => {
		if (show && autohide) clear()
		return () => {
			reset()
		}
	}, [show, autohide])

	return (
		<div
			className={`toast group ${state} ${position} ${show ? 'show' : ''}`}
			id='toast'
			role='alert'
		>
			{!autohide && (
				<CloseButton
					className='sm absolute right-0 top-0 bg-transparent !p-0 text-dark shadow-none'
					onClick={() => setShow(false)}
				/>
			)}
			<div className='message'>{message}</div>
		</div>
	)
}
