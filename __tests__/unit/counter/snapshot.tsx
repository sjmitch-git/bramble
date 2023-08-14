import { render } from '@testing-library/react'
import { Counter } from '@/components'

const value = 1
const label_value = 'Maximum of 3'
const MIN = 1
const MAX = 3

it('renders Counter unchanged', () => {
	const { container } = render(
		<Counter
			value={value}
			label={label_value}
			min={MIN}
			max={MAX}
			onCountChange={function (count: number): void {}}
		/>
	)
	expect(container).toMatchSnapshot()
})
