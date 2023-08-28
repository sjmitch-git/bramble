import { Input } from '@/ui'

import { AutocompleteProps } from './types'

export const Autocomplete = ({
	data,
	list,
	autocomplete = 'off',
	label,
	required,
	name,
	placeholder = 'Please Select',
	onchange,
}: AutocompleteProps) => {
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
