'use client'

import { useRef, useEffect } from 'react'

import { Button, CloseButton, Form } from '@/components'

interface DialogProps {
	open?: boolean
	modal?: boolean
	title?: string | undefined
	btnLabel?: string | undefined
	btnIcon?: React.ReactNode | undefined
	btnStyles?: string | undefined
	addOpenButton?: boolean | undefined
	onSubmit?: (e: React.FormEvent<HTMLFormElement>) => void
	children: React.ReactNode
	closeLabel?: string | undefined
	closeStyles?: string | undefined
}

export const Dialog = ({
	open = false,
	modal = false,
	title,
	addOpenButton = true,
	btnLabel = 'Open dialog',
	btnIcon,
	btnStyles = '',
	closeLabel,
	closeStyles = 'dark outline rounded',
	onSubmit,
	children,
}: DialogProps) => {
	const dialog = useRef<HTMLDialogElement>(null!)

	useEffect(() => {
		const handleClose = () => (document.body.style.overflow = '')

		if (dialog && dialog.current) dialog.current.addEventListener('close', handleClose, false)

		if (open) {
			if (modal) {
				dialog.current.showModal()
				document.body.style.overflow = 'hidden'
			} else dialog.current.show()
		}
		return () => {
			handleClose()
			if (dialog && dialog.current)
				dialog.current.removeEventListener('close', handleClose, false)
		}
	}, [open, modal])

	const closeDialog = () => dialog.current.close()

	const openDialog = () => {
		if (modal) {
			dialog.current.showModal()
			document.body.style.overflow = 'hidden'
		} else dialog.current.show()
	}

	return (
		<>
			<dialog
				id='dialog'
				ref={dialog}
				className='dialog'
				role='dialog'
			>
				{modal && (
					<CloseButton
						className='sm circle icon light absolute right-3 top-3 hover:scale-125'
						onClick={closeDialog}
					/>
				)}

				<Form
					method='dialog'
					legend={title}
					btnLabel={btnLabel}
					closeLabel={closeLabel}
					closeStyles={closeStyles}
					name='login'
					btnStyles='rounded'
					onSubmit={onSubmit}
					className='justify-center'
					onClick={closeDialog}
				>
					{children}
				</Form>
			</dialog>
			{addOpenButton && (
				<Button
					className={btnStyles}
					onClick={openDialog}
					title={title}
				>
					{btnIcon || btnLabel}
					{btnIcon && <span className='sr-only'>{title}</span>}
				</Button>
			)}
		</>
	)
}
