import { act, render, screen } from '@testing-library/react'
import fireEvent from '@testing-library/user-event'
import '@testing-library/jest-dom'

import { Alert } from '@/components'

const message = 'A message for the user'

let component: HTMLElement

describe('Accordian Component', () => {
	beforeEach(() => {
		render(<Alert message={message} />)
		component = screen.getByTestId('alert')
	})

	it('should render all elements', () => {
		expect(component).toBeInTheDocument()
	})
})
