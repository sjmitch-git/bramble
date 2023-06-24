import { useRef, useEffect } from 'react'

import Button from '@/components/button'
import ButtonClose from '@/components/button/ButtonClose'

interface DialogProps {
	open?: boolean
	btnLabel?: string | undefined
	btnStyles?: string | undefined
	addOpenButton?: boolean | undefined
	children: React.ReactNode
}

const Dialog = ({
	open = false,
	addOpenButton = true,
	btnLabel = 'Open dialog',
	btnStyles = '',
	children,
}: DialogProps) => {
	const dialog = useRef<HTMLDialogElement>(null!)

	useEffect(() => {
		if (open) dialog.current.showModal()
	}, [open])

	const closeDialog = () => {
		dialog.current.close()
	}

	const openDialog = () => {
		dialog.current.showModal()
	}

	return (
		<>
			<dialog
				id='dialog'
				ref={dialog}
				className='dialog'
			>
				<ButtonClose
					styles='dark hover:scale-125 fixed top-4 right-4 sm'
					onClick={closeDialog}
				/>
				{children}
			</dialog>
			{addOpenButton && (
				<Button
					styles={btnStyles}
					onClick={openDialog}
				>
					{btnLabel}
				</Button>
			)}
		</>
	)
}

export default Dialog
