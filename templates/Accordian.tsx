'use client'

import React, { useState } from 'react'

import Accordian from '@/components/accordian'

import Users from '@/data/users.json'
import Alert from '@/components/alert'
import Codeblock from '@/components/codeblock'

const AccordianTemplate = () => {
	const [error, setError] = useState('Page could not be found!')

	return (
		<>
			<h2>Usage</h2>
			<div className='mb-0'>
				<Codeblock language='jsx'>
					{`import Accordian from '@/components/accordian'
import Users from '@/data/users.json'
                    
<Accordian data={Users} />

/* DATA Structure
{
	"id": "1",
	"title": "Jeanette Penddreth",
	"body": "Ugh umami butcher pickled kogi stumptown, subway tile gatekeep flexitarian..."
},
...
*/`}
				</Codeblock>
			</div>

			<h2>Output</h2>

			<div className='mx-auto mb-12'>
				<Accordian data={Users} />
			</div>

			<hr />

			<h2>RTL</h2>

			<div
				className='mx-auto mb-12'
				dir='rtl'
			>
				<Accordian data={Users} />
			</div>

			<hr />
		</>
	)
}

export default AccordianTemplate
