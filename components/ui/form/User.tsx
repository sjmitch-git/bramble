import { Form, Input, Autocomplete } from '@/ui'

import { Form as TForm } from '@/types'

import data from '@/data/countries.json'

export const User = ({
	method = 'post',
	name = 'user',
	legend = 'User Details',
	btnLabel = 'Submit',
	btnStyles = '',
	closeLabel,
	closeStyles,
	layout = 'column',
	className = 'group p-4 md:px-0',
	onSubmit,
	onclick,
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
			onclick={onclick}
			className={className}
			closeLabel={closeLabel}
			closeStyles={closeStyles}
		>
			<Input
				label='Name'
				name='name'
				autocomplete='name'
				required={true}
			/>

			<Input
				label='Street'
				name='address'
				autocomplete='address'
				required={true}
			/>

			<Input
				label='City / Town'
				name='town'
				autocomplete='post town'
				required={true}
			/>

			<Input
				label='Zip / Post Code'
				name='postalcode'
				autocomplete='postal code'
				required={true}
			/>

			<Autocomplete
				data={data}
				list='countries'
				label='Country'
				name='country'
				autocomplete='country name'
				required={true}
			/>

			<Input
				label='Phone'
				type='tel'
				name='phone'
				autocomplete='phone'
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
