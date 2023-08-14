import { act, render, screen } from '@testing-library/react'
import fireEvent from '@testing-library/user-event'
import '@testing-library/jest-dom'

import { Accordian } from '@/components'

import data from '@/data/users.json'

let component: HTMLElement

describe('Accordian Component', () => {
	beforeEach(() => {
		render(<Accordian data={data} />)
		component = screen.getByTestId('accordian')
	})

	it('should render all elements', () => {
		expect(component).toBeInTheDocument()
	})
})
