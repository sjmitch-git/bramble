import { render } from '@testing-library/react'
import { Autocomplete } from '@/ui'

import DATA from '@/data/countries.json'

it('renders Autocomplete unchanged', () => {
	const { container } = render(
		<Autocomplete
			data={DATA}
			list='countries'
		/>
	)
	expect(container).toMatchSnapshot()
})
