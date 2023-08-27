import { render } from '@testing-library/react'
import { Alert } from '@/ui'

const message = 'A message for the user'

it('renders Alert unchanged', () => {
	const { container } = render(<Alert message={message} />)
	expect(container).toMatchSnapshot()
})
