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
                    
<Accordian
	data={Users} 	// json data
	opened='1'		// add id to open initially
	styles=''		// add Tailwind classes here
/>

/* DATA Structure
{
	"id": "1",
	"title": "Jeanette Penddreth",
	"body": "<p><strong>Ugh umami</strong> butcher <a href='#'>pickled kogi</a> stumptown, <em>subway tile</em> gatekeep..."
},
...
*/`}
				</Codeblock>
			</div>

			<Alert
				status='tip'
				message='HTML can be added in <code>body</code> prop.'
				styles='info'
			/>

			<h2>Output</h2>

			<div className='mx-auto mb-12 max-w-xl'>
				<Accordian
					data={Users}
					opened='1'
				/>
			</div>

			<h3>Small</h3>

			<div className='mb-0'>
				<Codeblock language='jsx'>
					{`<Accordian
	data={Users}
	size='sm'
/>`}
				</Codeblock>
			</div>

			<div className='mx-auto mb-12 max-w-sm'>
				<Accordian
					data={Users}
					size='sm'
				/>
			</div>

			<hr />

			<h3>Large</h3>

			<div className='mb-0'>
				<Codeblock language='jsx'>
					{`<Accordian
	data={Users}
	size='lg'
/>`}
				</Codeblock>
			</div>

			<div className='mx-auto mb-12 max-w-3xl'>
				<Accordian
					data={Users}
					size='lg'
				/>
			</div>

			<hr />

			<h2>RTL</h2>

			<div className='mb-0'>
				<Codeblock language='jsx'>
					{`<div dir='rtl'>
	<Accordian
		data={Users}
		size='sm'
	/>
</div>`}
				</Codeblock>
			</div>

			<div
				className='mx-auto mb-12 max-w-sm'
				dir='rtl'
			>
				<Accordian
					data={Users}
					size='sm'
				/>
			</div>
		</>
	)
}

export default AccordianTemplate
