import { Form, Input } from '@/components'

import { Form as TForm } from '@/types'

export const Login = ({
	method = 'post',
	name = 'login',
	legend = 'Log In',
	btnLabel = 'Log In',
	btnStyles = '',
	layout = 'column',
	className = 'group p-4 md:px-0',
	onSubmit,
}: TForm) => {
	return (
		<Form
			method={method}
			name={name}
			layout={layout}
			legend={legend}
			btnLabel={btnLabel}
			btnStyles={btnStyles}
			onSubmit={onSubmit}
			className={className}
		>
			<Input
				label='Email'
				name='username'
				autocomplete='email'
				type='email'
				required={true}
			/>

			<Input
				label='Password'
				name='password'
				autocomplete='current-password'
				type='password'
				required={true}
				pattern='(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}'
				hint='Must contain at least one number and one uppercase and lowercase letter, and at least 8 or more characters'
			/>

			<Input
				type='checkbox'
				label='Keep me signed in'
				name='remember'
				hint="Don't tick if you are using public or shared device"
				hintShow={true}
			/>
		</Form>
	)
}
