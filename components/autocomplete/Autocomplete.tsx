import { Input } from '@/components'

import { Autocomplete as TAutocomplete } from '@/types'

export const Autocomplete = ({
	data,
	list,
	autocomplete = 'off',
	label,
	required,
	name,
	placeholder = 'Please Select',
	onchange,
}: TAutocomplete) => {
	return (
		<>
			<Input
				list={list}
				label={label || list}
				placeholder={placeholder}
				autocomplete={autocomplete}
				required={required}
				name={name || list}
				onchange={onchange}
			/>

			<datalist
				className='datalist'
				id={list}
				data-testid='datalist'
			>
				{data.map((el, index) => (
					<option
						key={index}
						value={el}
					>
						{el}
					</option>
				))}
			</datalist>
		</>
	)
}
