'use client'

import { Button } from '@/ui'

import { Form as TForm } from '@/types'

export const Form = ({
	action,
	method = 'get',
	autocomplete = 'off',
	name = 'form',
	btnLabel = 'Submit',
	btnStyles = '',
	closeLabel,
	closeStyles = '',
	legend,
	layout = 'column',
	className = '',
	children,
	onSubmit,
	onclick,
}: TForm) => {
	return (
		<form
			onSubmit={onSubmit}
			action={action}
			method={method}
			name={name}
			autoComplete={autocomplete}
			className={`form ${className}`}
		>
			<fieldset className={layout}>
				{legend && <legend>{legend}</legend>}
				<div className='inputs'>{children}</div>
				<div className='actions'>
					{onSubmit && (
						<Button
							type='submit'
							className={`${btnStyles}`}
						>
							{btnLabel}
						</Button>
					)}
					{closeLabel && (
						<Button
							className={closeStyles}
							type='button'
							onClick={onclick}
						>
							{closeLabel}
						</Button>
					)}
				</div>
			</fieldset>
		</form>
	)
}
