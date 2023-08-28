import { Accordion, Alert, Codeblock } from '@/ui'

import Users from '@/data/users.json'

const AccordionTemplate = () => {
	return (
		<>
			<h2>Usage</h2>

			<div className='mb-0'>
				<Codeblock language='jsx'>
					{`import {Accordion} from '@/ui'
import Users from '@/data/users.json'
                    
<Accordion
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
				message='HTML can be added in data <code>body</code>'
				className='info'
			/>

			<h2>Layouts</h2>

			<h3>Default Layout</h3>

			<div className='mx-auto mb-4 max-w-xl'>
				<Accordion
					data={Users}
					opened='1'
				/>
			</div>
			<div className='mb-12'>
				<Codeblock language='jsx'>
					{`<Accordion
	data={Users}
	opened='1'
/>`}
				</Codeblock>
			</div>

			<h3>Flush Layout</h3>

			<div className='mx-auto mb-4 max-w-xl'>
				<Accordion
					data={Users}
					layout='flush'
				/>
			</div>

			<div className='mb-12'>
				<Codeblock language='jsx'>
					{`<Accordion
	data={Users}
	layout='flush'
/>`}
				</Codeblock>
			</div>

			<h3>Spaced Layout</h3>

			<div className='mx-auto mb-4 max-w-xl'>
				<Accordion
					data={Users}
					layout='spaced'
				/>
			</div>

			<div className='mb-12'>
				<Codeblock language='jsx'>
					{`<Accordion
	data={Users}
	layout='spaced'
/>`}
				</Codeblock>
			</div>

			<hr />

			<h2>Sizes</h2>

			<h3>Small</h3>

			<div className='mx-auto mb-8 max-w-sm'>
				<Accordion
					data={Users}
					size='sm'
				/>
			</div>

			<div className='mb-12'>
				<Codeblock language='jsx'>
					{`<Accordion
	data={Users}
	size='sm'
/>`}
				</Codeblock>
			</div>

			<h3>Large</h3>

			<div className='mx-auto mb-8 max-w-3xl'>
				<Accordion
					data={Users}
					size='lg'
				/>
			</div>

			<div className='mb-12'>
				<Codeblock language='jsx'>
					{`<Accordion
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
				<Accordion
					data={Users}
					size='sm'
				/>
			</div>

			<div className='mb-12'>
				<Codeblock language='jsx'>
					{`<div dir='rtl'>
	<Accordion
		data={Users}
		size='sm'
	/>
</div>`}
				</Codeblock>
			</div>
		</>
	)
}

export default AccordionTemplate
