'use client'

import { useRef, useEffect } from 'react'

import { Button, CloseButton, Form } from '@/ui'

import { DialogProps } from './types'

export const Dialog = ({
	open = false,
	modal = true,
	addForm = false,
	title,
	addOpenButton = true,
	btnLabel = 'Open dialog',
	btnIcon,
	btnStyles = '',
	onSubmit,
	children,
}: DialogProps) => {
	const dialog = useRef<HTMLDialogElement>(null!)

	useEffect(() => {
		const dialogRef = dialog.current
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
			if (dialogRef) dialogRef.removeEventListener('close', handleClose, false)
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

				{addForm ? (
					<Form
						method='dialog'
						legend={title}
						btnLabel={btnLabel}
						name='login'
						btnStyles='rounded'
						onSubmit={onSubmit}
						className={`${addForm ? 'hideactions' : ''} justify-center`}
						onClick={closeDialog}
					>
						{children}
					</Form>
				) : (
					<div>{children}</div>
				)}
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
