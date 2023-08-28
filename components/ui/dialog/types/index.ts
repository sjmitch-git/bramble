export interface DialogProps extends React.HTMLAttributes<HTMLDialogElement> {
	open?: boolean
	modal?: boolean
	addForm?: boolean
	title?: string | undefined
	btnLabel?: string | undefined
	btnIcon?: React.ReactNode | undefined
	btnStyles?: string | undefined
	addOpenButton?: boolean | undefined
	onSubmit?: (e: any) => void
	children: React.ReactNode
	closeLabel?: string | undefined
	closeStyles?: string | undefined
}
