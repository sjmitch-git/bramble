export interface AlertProps extends React.HTMLAttributes<HTMLQuoteElement> {
	className?: string
	status?: string
	message: string
	onClick?: () => void
}
