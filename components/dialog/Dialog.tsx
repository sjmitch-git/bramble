import { useRef, useEffect } from 'react'

import Button from '@/components/button'
import ButtonClose from '@/components/button/ButtonClose'

interface DialogProps {
	open?: boolean
	modal?: boolean
	btnLabel?: string | undefined
	btnStyles?: string | undefined
	addOpenButton?: boolean | undefined
	children: React.ReactNode
}

const Dialog = ({
	open = false,
	modal = false,
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
					<ButtonClose
						styles='dark hover:scale-125 fixed top-4 right-4 sm'
						onClick={closeDialog}
					/>
				)}
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
