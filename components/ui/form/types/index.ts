export interface FormProps extends React.HTMLAttributes<HTMLFormElement> {
	action?: string
	method?: 'get' | 'post' | 'dialog'
	layout?: 'column' | 'row'
	autocomplete?: 'on' | 'off'
	name?: string
	legend?: string
	btnLabel?: string
	btnStyles?: string
	closeLabel?: string
	closeStyles?: string
	className?: string | undefined
	children?: React.ReactNode
	valid?: boolean
	onSubmit?: (e: React.FormEvent<HTMLFormElement>) => void
	onclick?: (e: React.FormEvent<HTMLButtonElement>) => void
}
