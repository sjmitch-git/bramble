import { Button } from '@/components'

interface FormProps {
	action?: string
	method?: 'get' | 'post'
	autocomplete?: 'on' | 'off'
	name?: string
	legend?: string
	btnLabel?: string
	btnStyles?: string
	className?: string | undefined
	children: React.ReactNode
	valid?: boolean
	onSubmit?: (e: any) => void | boolean | undefined
}

export const Form = ({
	action,
	method = 'get',
	autocomplete = 'off',
	name = 'form',
	btnLabel = 'Submit',
	btnStyles = '',
	legend,
	className = '',
	children,
	onSubmit,
}: FormProps) => {
	return (
		<form
			onSubmit={onSubmit}
			action={action}
			method={method}
			name={name}
			autoComplete={autocomplete}
			className={`form ${className}`}
		>
			<fieldset>
				{legend && <legend>{legend}</legend>}
				{children}
				<Button
					type='submit'
					className={`${btnStyles}`}
				>
					{btnLabel}
				</Button>
			</fieldset>
		</form>
	)
}
