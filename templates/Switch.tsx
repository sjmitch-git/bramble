import { Codeblock, Switch } from '@/ui'

const SwitchTemplate = () => {
	return (
		<>
			<h2>Usage</h2>

			<h3>Default</h3>

			<div className='mb-4 bg-light px-2 py-4 md:p-4'>
				<Switch
					label='I agree to terms and conditions'
					name='terms'
					required={true}
				/>
			</div>

			<Codeblock language='jsx'>
				{`import {Switch} from '@/ui'
				
<Switch
	label='I agree to terms and conditions'
	name='terms'
	required={true}
/>`}
			</Codeblock>

			<h3>Square</h3>

			<div className='mb-4 bg-light px-2 py-4 md:p-4'>
				<Switch
					label='I agree to terms and conditions'
					name='terms'
					required={true}
					round={false}
					switchColor='danger'
				/>
			</div>

			<Codeblock language='jsx'>
				{`import {Switch} from '@/ui'
				
<Switch
	label='I agree to terms and conditions'
	name='terms'
	required={true}
	round={false}
	switchColor='danger'
/>`}
			</Codeblock>

			<h3>Thin</h3>

			<div className='mb-0 bg-light px-2 py-4 md:p-4'>
				<Switch
					label='I agree to terms and conditions'
					name='terms'
					className='thin'
					required={true}
				/>
			</div>

			<div className='mb-8 bg-light px-2 py-4 md:p-4'>
				<Switch
					label='I agree to terms and conditions'
					name='terms'
					className='thin'
					round={false}
					required={true}
				/>
			</div>

			<Codeblock language='jsx'>
				{`import {Switch} from '@/ui'
				
<Switch
	label='I agree to terms and conditions'
	name='terms'
	className='thin'
	required={true}
/>
				
<Switch
	label='I agree to terms and conditions'
	name='terms'
	className='thin'
	round={false}
	required={true}
/>`}
			</Codeblock>

			<h3>Reverse Layout</h3>

			<div className='mb-4 bg-light px-2 py-4 md:p-4'>
				<Switch
					label='I agree to terms and conditions'
					name='terms'
					className='reverse'
					required={true}
					round={false}
				/>
			</div>

			<Codeblock language='jsx'>
				{`import {Switch} from '@/ui'
				
<Switch
	label='I agree to terms and conditions'
	name='terms'
	className='reverse'
	required={true}
	round={false}
/>`}
			</Codeblock>

			<h3>Colours</h3>

			<div className='mb-0 bg-light px-2 py-4 md:p-4'>
				<Switch
					label='Info'
					name='terms'
					className='thin'
					switchColor='info'
					checked={true}
				/>
			</div>
			<div className='mb-0 bg-light px-2 py-4 md:p-4'>
				<Switch
					label='Success'
					name='terms'
					className='thin'
					switchColor='success'
					checked={true}
				/>
			</div>
			<div className='mb-0 bg-light px-2 py-4 md:p-4'>
				<Switch
					label='Warning'
					name='terms'
					className='thin'
					switchColor='warning'
					checked={true}
				/>
			</div>
			<div className='mb-4 bg-light px-2 py-4 md:p-4'>
				<Switch
					label='Danger'
					name='terms'
					className='thin'
					switchColor='danger'
					checked={true}
				/>
			</div>

			<Codeblock language='jsx'>
				{`<Switch
	switchColor='info' // 'info | 'success' | 'warning' | 'danger' | undefined = 'info'
/>`}
			</Codeblock>
		</>
	)
}

export default SwitchTemplate
