import { render } from '@testing-library/react'
import { Accordion } from '@/ui'

import data from '@/data/users.json'

it('renders Accordion unchanged', () => {
	const { container } = render(<Accordion data={data} />)
	expect(container).toMatchSnapshot()
})
