'use client'

import { useRef, useEffect } from 'react'

import { Button } from '@/ui'

import { FormProps } from './types'

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
}: FormProps) => {
	const form = useRef<HTMLFormElement>(null!)
	const submitButton = useRef<HTMLButtonElement>(null!)

	const handleInput = () => {
		submitButton.current.disabled = !form?.current?.checkValidity()
	}

	return (
		<form
			onSubmit={onSubmit}
			onInput={handleInput}
			action={action}
			method={method}
			name={name}
			autoComplete={autocomplete}
			className={`form group ${className}`}
			ref={form}
		>
			<fieldset className={layout}>
				{legend && <legend>{legend}</legend>}
				<div className='inputs'>{children}</div>
				<div className='actions'>
					{onSubmit && (
						<Button
							type='submit'
							ref={submitButton}
							className={`${btnStyles}`}
							disabled={true}
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
