import { render } from '@testing-library/react'
import { Accordian } from '@/ui'

import data from '@/data/users.json'

it('renders Accordian unchanged', () => {
	const { container } = render(<Accordian data={data} />)
	expect(container).toMatchSnapshot()
})
