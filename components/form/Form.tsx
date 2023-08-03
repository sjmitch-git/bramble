'use client'

import { Button } from '@/components'

interface FormProps {
	action?: string
	method?: 'get' | 'post' | 'dialog'
	autocomplete?: 'on' | 'off'
	name?: string
	legend?: string
	btnLabel?: string
	btnStyles?: string
	closeLabel?: string
	closeStyles?: string
	className?: string | undefined
	children: React.ReactNode
	valid?: boolean
	onSubmit?: (e: React.FormEvent<HTMLFormElement>) => void
	onClick?: (e: React.FormEvent<HTMLInputElement>) => void
}

export const Form = ({
	action,
	method = 'get',
	autocomplete = 'off',
	name = 'form',
	btnLabel = 'Submit',
	closeLabel = 'ok',
	btnStyles = '',
	closeStyles = 'dark outline',
	legend,
	className = '',
	children,
	onSubmit,
	onClick,
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
				<div className='actions'>
					{onSubmit && (
						<Button
							type='submit'
							className={`${btnStyles}`}
						>
							{btnLabel}
						</Button>
					)}
					{method === 'dialog' && (
						<Button
							className={closeStyles}
							type='button'
							onClick={onClick}
						>
							{closeLabel}
						</Button>
					)}
				</div>
			</fieldset>
		</form>
	)
}
