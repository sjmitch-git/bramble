'use client'

import { useRef, useEffect } from 'react'

import { Button, CloseButton } from '@/components'

interface DialogProps {
	open?: boolean
	modal?: boolean
	title?: string | undefined
	message?: string | undefined
	node?: React.ReactNode | undefined
	btnLabel?: string | undefined
	btnStyles?: string | undefined
	addOpenButton?: boolean | undefined
	children: React.ReactNode
}

export const Dialog = ({
	open = false,
	modal = false,
	title,
	message,
	node,
	addOpenButton = true,
	btnLabel = 'Open dialog',
	btnStyles = '',
	children,
}: DialogProps) => {
	const dialog = useRef<HTMLDialogElement>(null!)

	useEffect(() => {
		if (open) {
			if (modal) dialog.current.showModal()
			else dialog.current.show()
		}
	}, [open, modal])

	const closeDialog = () => {
		dialog.current.close()
	}

	const openDialog = () => {
		if (modal) dialog.current.showModal()
		else dialog.current.show()
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
				<form method='dialog'>
					{title && <h2>{title}</h2>}
					{message && (
						<div
							className='message'
							dangerouslySetInnerHTML={{ __html: message }}
						></div>
					)}
					{node && <div className='node'>{node}</div>}
					<div className='flex justify-center gap-4'>{children}</div>
				</form>
			</dialog>
			{addOpenButton && (
				<Button
					className={btnStyles}
					onClick={openDialog}
				>
					{btnLabel}
				</Button>
			)}
		</>
	)
}
