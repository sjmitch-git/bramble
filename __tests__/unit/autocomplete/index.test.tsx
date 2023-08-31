import { act, render, screen, within } from '@testing-library/react'
import fireEvent from '@testing-library/user-event'
import '@testing-library/jest-dom'
import { logRoles } from '@testing-library/dom'

import { Autocomplete } from '@/ui'

import { AutocompleteProps } from '@/types'

import DATA from '@/data/countries.json'

const placeholder = 'Select your country'
const list = 'countries'

let component: HTMLElement
let datalist: HTMLElement
let firstOption: HTMLElement
let firstOptionValue = DATA[0]

const defaultProps = {
	data: DATA,
	list: list,
	label: 'Country',
	name: 'country',
	autocomplete: 'country name',
	placeholder: placeholder,
}

describe('Autocomplete Component', () => {
	const renderComponent = (props: AutocompleteProps) => {
		render(<Autocomplete {...props} />)
		component = screen.getByRole('combobox')
		datalist = screen.getByTestId('datalist')
		firstOption = within(datalist).getByText(firstOptionValue)
	}

	const logroles = (el: HTMLElement) => {
		logRoles(el)
	}

	it('should render all elements', () => {
		renderComponent({ ...defaultProps })
		expect(component).toBeInTheDocument()
		expect(datalist).toBeInTheDocument()
		expect(firstOption).toBeInTheDocument()
		logroles(datalist)
	})

	it('should display placeholder text', () => {
		renderComponent({ ...defaultProps })
		expect(component).toHaveAttribute('placeholder', placeholder)
	})

	it('should display with id and datalist list to have the same value', () => {
		renderComponent({ ...defaultProps })
		expect(component).toHaveAttribute('list', list)
		expect(datalist).toHaveAttribute('id', list)
	})

	it('should display input with no value', () => {
		renderComponent({ ...defaultProps })
		expect(component).toHaveValue('')
	})

	it('should display input with value of first option when typed', () => {
		renderComponent({ ...defaultProps })
		expect(component).toHaveValue('')
		act(() => {
			fireEvent.type(component, firstOptionValue)
		})
		expect(component).toHaveValue(firstOptionValue)
	})
})
