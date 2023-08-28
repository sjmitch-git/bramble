import { act, render, screen } from '@testing-library/react'
import fireEvent from '@testing-library/user-event'
import '@testing-library/jest-dom'
import { logRoles } from '@testing-library/dom'

import { Accordion } from '@/ui'

import DATA from '@/data/users.json'

let component: HTMLElement
let headers: HTMLElement[]
let buttons: HTMLElement[]
let sections: HTMLElement[]
const dataLength = DATA.length

describe('Accordion Component', () => {
	beforeEach(() => {
		render(
			<Accordion
				data={DATA}
				opened='1'
				onClick={function (): void {}}
			/>
		)
		component = screen.getByTestId('accordian')
		buttons = screen.getAllByRole('button')
		headers = screen.getAllByRole('heading')
		sections = screen.getAllByRole('section')
		//logRoles(component)
	})

	it('should render all elements', () => {
		expect(component).toBeInTheDocument()
		expect(buttons.length).toBe(dataLength)
		expect(headers.length).toBe(dataLength)
		expect(sections.length).toBe(dataLength)
	})

	it('should render all buttons with text for screen readers', () => {
		function iterate(button: HTMLElement) {
			expect(button).toHaveTextContent('Toggle section')
		}
		buttons.forEach(iterate)
	})

	it('should render all headers with text content from DATA', () => {
		function iterate(header: HTMLElement, index: number) {
			expect(header).toHaveTextContent(DATA[index].title)
		}
		headers.forEach(iterate)
	})

	it("should render first header with 'open' class", () => {
		expect(headers[0]).toHaveClass('open')
	})

	it("should remove 'open' class from first header and apply it to second header", () => {
		act(() => {
			fireEvent.click(buttons[1])
		})
		expect(headers[0]).not.toHaveClass('open')
		expect(headers[1]).toHaveClass('open')
	})
})
