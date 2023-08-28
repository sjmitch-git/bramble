export interface ModalProps extends React.HTMLAttributes<HTMLDivElement> {
	className?: string | undefined
	data: {
		src: string
		name: string
	}
	onClick?: () => void | undefined
}
