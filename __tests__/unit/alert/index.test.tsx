import { act, render, screen } from '@testing-library/react'
import fireEvent from '@testing-library/user-event'
import '@testing-library/jest-dom'
import { logRoles } from '@testing-library/dom'

import { Alert } from '@/components'

import { Alert as TAlert } from '@/types'

const message = 'A message for the user'
const status = 'info'

let component: HTMLElement
let heading: HTMLElement
let button: HTMLElement

const onClick = () => {}

const defaultProps = {
	message: message,
	status: status,
	className: 'info',
	onClick: onClick,
}

describe('Alert Component', () => {
	const renderComponent = (props: TAlert) => {
		render(<Alert {...props} />)
		component = screen.getByRole('alert')
		heading = screen.getByRole('heading')
		button = screen.getByRole('button')
	}

	const logroles = (el: HTMLElement) => {
		logRoles(el)
	}

	it('should render all elements', () => {
		renderComponent({ ...defaultProps })
		expect(component).toBeInTheDocument()
		expect(heading).toBeInTheDocument()
		expect(button).toBeInTheDocument()
		// logroles(component)
	})

	it('should render message', () => {
		renderComponent({ ...defaultProps })
		expect(component).toHaveTextContent(message)
	})

	it('should render status', () => {
		renderComponent({ ...defaultProps })
		expect(heading).toHaveTextContent(status)
	})

	it('should render close button with text content', () => {
		renderComponent({ ...defaultProps })
		expect(button).toHaveTextContent('Close')
	})

	it('should render component with solid background', () => {
		renderComponent({ ...defaultProps, className: 'solid' })
		expect(component).toHaveClass('solid')
	})
})
