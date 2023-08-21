'use client'

import { Codeblock, Autocomplete } from '@/components'

import data from '@/data/countries.json'

const AutocompleteTemplate = () => {
	const onchange = (event: any) => {
		// do something...
	}

	return (
		<>
			<h2>Usage</h2>

			<div className='mb-8 border p-4'>
				<Autocomplete
					data={data}
					list='countries'
					label='Country'
					name='country'
					autocomplete='country name'
					placeholder='Select your country'
					onchange={onchange}
				/>
			</div>

			<Codeblock language='jsx'>
				{`import {Autocomplete} from '@/components'
                
const data = ["Afghanistan","Albania","Algeria","Andorra","Angola"...

const onchange = (event: any) => {
	// do something...
}
				
<Autocomplete
    data={data}
    list='countries'
    label='Country'
    name='country'
    autocomplete='country name'
    placeholder='Select your country'
	onchange={onchange}
/>`}
			</Codeblock>
		</>
	)
}

export default AutocompleteTemplate
