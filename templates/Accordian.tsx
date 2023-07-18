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
	className=''	// add Tailwind classes here
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
				className='info'
			/>

			<h2>Layouts</h2>

			<h3>Default Layout</h3>

			<div className='mx-auto mb-4 max-w-xl'>
				<Accordian
					data={Users}
					opened='1'
				/>
			</div>
			<div className='mb-12'>
				<Codeblock language='jsx'>
					{`<Accordian
	data={Users}
	opened='1'
/>`}
				</Codeblock>
			</div>

			<h3>Flush Layout</h3>

			<div className='mx-auto mb-4 max-w-xl'>
				<Accordian
					data={Users}
					layout='flush'
				/>
			</div>

			<div className='mb-12'>
				<Codeblock language='jsx'>
					{`<Accordian
	data={Users}
	layout='flush'
/>`}
				</Codeblock>
			</div>

			<h3>Spaced Layout</h3>

			<div className='mx-auto mb-4 max-w-xl'>
				<Accordian
					data={Users}
					layout='spaced'
				/>
			</div>

			<div className='mb-12'>
				<Codeblock language='jsx'>
					{`<Accordian
	data={Users}
	layout='spaced'
/>`}
				</Codeblock>
			</div>

			<hr />

			<h2>Sizes</h2>

			<h3>Small</h3>

			<div className='mx-auto mb-8 max-w-sm'>
				<Accordian
					data={Users}
					size='sm'
				/>
			</div>

			<div className='mb-12'>
				<Codeblock language='jsx'>
					{`<Accordian
	data={Users}
	size='sm'
/>`}
				</Codeblock>
			</div>

			<h3>Large</h3>

			<div className='mx-auto mb-8 max-w-3xl'>
				<Accordian
					data={Users}
					size='lg'
				/>
			</div>

			<div className='mb-12'>
				<Codeblock language='jsx'>
					{`<Accordian
	data={Users}
	size='lg'
/>`}
				</Codeblock>
			</div>

			<hr />

			<h2>RTL</h2>

			<div
				className='mx-auto mb-8 max-w-sm'
				dir='rtl'
			>
				<Accordian
					data={Users}
					size='sm'
				/>
			</div>

			<div className='mb-12'>
				<Codeblock language='jsx'>
					{`<div dir='rtl'>
	<Accordian
		data={Users}
		size='sm'
	/>
</div>`}
				</Codeblock>
			</div>
		</>
	)
}

export default AccordianTemplate
