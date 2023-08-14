import { act, render, screen } from '@testing-library/react'
import fireEvent from '@testing-library/user-event'
import '@testing-library/jest-dom'

import { Counter } from '@/components'

const value = 1
const label_value = 'Maximum of 3'
const MIN = 1
const MAX = 3

let counter: HTMLElement
let inputCounter: HTMLElement
let increaseCount: HTMLElement
let decreaseCount: HTMLElement
let counterLabel: HTMLElement

describe('Counter Component', () => {
	beforeEach(() => {
		render(
			<Counter
				value={value}
				label={label_value}
				min={MIN}
				max={MAX}
				onCountChange={function (count: number): void {}}
			/>
		)
		counter = screen.getByTestId('counter')
		inputCounter = screen.getByTestId('input')
		increaseCount = screen.getByTestId('plus')
		decreaseCount = screen.getByTestId('minus')
		counterLabel = screen.getByTestId('label')
	})

	it('should render all elements', () => {
		expect(counter).toBeInTheDocument()
		expect(inputCounter).toBeInTheDocument()
		expect(counterLabel).toBeInTheDocument()
		expect(decreaseCount).toBeInTheDocument()
		expect(increaseCount).toBeInTheDocument()
	})

	it('should render a counter with value of 1', () => {
		expect(inputCounter).toHaveValue(value)
	})

	it('should increase count when plus button is clicked', () => {
		expect(inputCounter).toHaveValue(1)
		act(() => {
			fireEvent.click(increaseCount)
			expect(inputCounter).toHaveValue(2)
		})
	})

	it('should decrease count when minus button is clicked', () => {
		act(() => {
			fireEvent.click(increaseCount)
		})
		act(() => {
			fireEvent.click(decreaseCount)
			expect(inputCounter).toHaveValue(1)
		})
	})

	it('should not increase to more than MAX', () => {
		act(() => {
			fireEvent.click(increaseCount)
			expect(inputCounter).toHaveValue(2)
		})
		act(() => {
			fireEvent.click(increaseCount)
			expect(inputCounter).toHaveValue(3)
		})
		expect(increaseCount).toBeDisabled()
	})

	it('should not decrease to less than MIN', () => {
		expect(decreaseCount).toBeDisabled()
	})
})
