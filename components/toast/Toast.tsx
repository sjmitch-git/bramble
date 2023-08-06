'use client'

import { useContext, useEffect } from 'react'

import { ToastContext } from '@/contexts/toast.context'

import { CloseButton } from '@/components'

export function Toast() {
	const { state, show, setShow, message, position, autohide } = useContext(ToastContext)

	useEffect(() => {
		let timer: any
		if (show && autohide) {
			timer = setTimeout(() => {
				setShow(false)
			}, 3000)
		}
		return () => {
			if (timer) clearTimeout(timer)
			if (show) setShow(false)
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
