import { Form, Input } from '@/ui'

import { FormProps } from './types'

export const NewsLetter = ({
	legend = 'Sign up for our newsletter?',
	btnLabel = 'Sign Up',
	btnStyles = '',
	layout = 'column',
	closeLabel,
	closeStyles,
	className = 'group p-4 md:px-0',
	onSubmit,
	onclick,
}: FormProps) => {
	return (
		<Form
			method='post'
			legend={legend}
			btnLabel={btnLabel}
			name='signup'
			layout={layout}
			btnStyles={btnStyles}
			closeLabel={closeLabel}
			closeStyles={closeStyles}
			onSubmit={onSubmit}
			onclick={onclick}
			className={className}
		>
			<Input
				label='Name'
				name='name'
				autocomplete='name'
				required={true}
			/>
			<Input
				label='Email'
				type='email'
				name='email'
				autocomplete='email'
				required={true}
			/>
		</Form>
	)
}
