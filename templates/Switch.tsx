import { Codeblock, Switch } from '@/components'

const NavbarTemplate = () => {
	return (
		<>
			<h2>Usage</h2>

			<h3>Round</h3>

			<div className='mb-8 bg-light p-4'>
				<Switch
					label='I agree to terms and conditions'
					name='terms'
					required={true}
				/>
			</div>

			<Codeblock language='jsx'>
				{`import {Navbar, Brand} from '@/components'
				
<Switch
	label='I agree to terms and conditions'
	name='terms'
	required={true}
/>`}
			</Codeblock>

			<h3>Square</h3>

			<div className='mb-8 bg-light p-4'>
				<Switch
					label='I agree to terms and conditions'
					name='terms'
					className='reverse'
					required={true}
					round={false}
					switchColor='danger'
				/>
			</div>

			<Codeblock language='jsx'>
				{`import {Switch} from '@/components'
				
<Switch
	label='I agree to terms and conditions'
	name='terms'
	className='reverse'
	required={true}
	round={false}
	switchColor='danger'
/>`}
			</Codeblock>
		</>
	)
}

export default NavbarTemplate
