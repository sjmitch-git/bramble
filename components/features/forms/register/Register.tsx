'use client'

import Link from 'next/link'

import { useState } from 'react'

import { Form, Input } from '@/ui'

import { FormProps } from '@/types'

export const Register = ({
	method = 'post',
	name = 'register',
	legend = 'Sign Up',
	btnLabel = 'Sign Up',
	btnStyles = '',
	layout = 'column',
	className = 'group p-4 md:px-0',
	onSubmit,
}: FormProps) => {
	const [password, setPassword] = useState('')

	const handleChange = (e: any) => {
		setPassword(e.target.value)
	}
	return (
		<Form
			method={method}
			layout={layout}
			legend={legend}
			btnLabel={btnLabel}
			name={name}
			btnStyles={btnStyles}
			onSubmit={onSubmit}
			className={className}
		>
			<p>Please fill in this form to create an account.</p>

			<Input
				label='Email'
				name='email'
				autocomplete='email'
				type='email'
				required={true}
				hint='Enter a valid email address'
			/>

			<Input
				label='Password'
				name='password'
				autocomplete='new-password'
				type='password'
				required={true}
				onchange={handleChange}
				className='peer'
				pattern='(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}'
				hint='Must contain at least one number and one uppercase and lowercase letter, and at least 8 or more characters'
			/>

			<Input
				label='Confirm Password'
				name='confirmpassword'
				autocomplete='new-password'
				type='password'
				required={true}
				className='peer-invalid:hidden'
				pattern={password}
			/>

			<Input
				type='checkbox'
				label='Remember me'
				name='remember'
			/>

			<p className='text-base'>
				By creating an account you agree to our{' '}
				<Link
					href='../terms_and_conditions'
					target='_blank'
				>
					Terms & Conditions
				</Link>
			</p>
		</Form>
	)
}
