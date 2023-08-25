export type Alert = {
	className?: string
	status?: string
	message: string
	onClick?: () => void | undefined
} & React.HTMLAttributes<HTMLQuoteElement>

export type Autocomplete = {
	data: any[]
	list: string
	name?: string
	autocomplete?: string
	label?: string
	required?: boolean
	placeholder?: string
	onchange?: React.ChangeEventHandler<HTMLInputElement>
} & React.HTMLAttributes<HTMLInputElement>

export type Button = {
	size?: string | undefined
	className?: string | undefined
	id?: string | undefined
	title?: string | undefined
	children: React.ReactNode
	onClick?: (e: any) => void | undefined
	onBlur?: (e: any) => void | undefined
	type?: 'submit' | 'reset' | 'button' | undefined
	disabled?: boolean | undefined
	tabindex?: number | undefined
	role?: string | undefined
} & React.HTMLAttributes<HTMLButtonElement>

export type Dialog = {
	open?: boolean
	modal?: boolean
	addForm?: boolean
	title?: string | undefined
	btnLabel?: string | undefined
	btnIcon?: React.ReactNode | undefined
	btnStyles?: string | undefined
	addOpenButton?: boolean | undefined
	onSubmit?: (e: React.FormEvent<HTMLFormElement>) => void
	children: React.ReactNode
	closeLabel?: string | undefined
	closeStyles?: string | undefined
} & React.HTMLAttributes<HTMLDialogElement>

export type Form = {
	action?: string
	method?: 'get' | 'post' | 'dialog'
	layout?: 'column' | 'row' | undefined
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
} & React.HTMLAttributes<HTMLFormElement>

export type Input = {
	type?: string
	autocomplete?: string
	name?: string
	label?: React.ReactNode
	title?: string
	hint?: string
	placeholder?: string
	list?: string
	pattern?: string
	className?: string | undefined
	labelStyles?: string | undefined
	required?: boolean
	readonly?: boolean
	tabindex?: number
	min?: number | string
	max?: number | string
	accept?: string
	value?: any
	checked?: boolean
	hintShow?: boolean
	onchange?: React.ChangeEventHandler<HTMLInputElement>
	oninput?: React.ChangeEventHandler<HTMLInputElement>
} & React.HTMLAttributes<HTMLInputElement>

export type Tab = {
	id: string
	activeId?: string
	title: string
	tabStyles?: string | undefined
	onclick: (id: string) => void | undefined
} & React.HTMLAttributes<HTMLButtonElement>
