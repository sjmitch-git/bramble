import { useRef, useEffect } from 'react'

import Button from '@/components/button'
import CloseButton from '@/components/button/CloseButton'

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
					<CloseButton
						className='sm dark fixed right-4 top-4 hover:scale-125'
						onClick={closeDialog}
					/>
				)}
				{children}
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

export default Dialog
