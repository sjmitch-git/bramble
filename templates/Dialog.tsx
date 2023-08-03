'use client'

import { useState } from 'react'

import { Alert, Codeblock, Dialog, Input } from '@/components'
import { UserIcon } from '@heroicons/react/24/solid'

const handleSubmit = (e: any) => {
	document.body.style.overflow = ''
	const data = new FormData(e.target)
	console.log(Object.fromEntries(data.entries()))
}

const DialogTemplate = () => {
	const [password, setPassword] = useState('')

	const handleChange = (e: any) => {
		setPassword(e.target.value)
	}
	return (
		<>
			<h2>Basic</h2>
			<div className='h-80 bg-neutral p-4 text-center'>
				<Dialog
					title='Dialog Title'
					addOpenButton={false}
					open={true}
				>
					<div>
						<p className='mb-0 text-xl'>
							The <code>dialog</code> element is a useful element for representing any
							kind of dialog in HTML.
						</p>
					</div>
				</Dialog>
			</div>

			<h2>Modal</h2>

			<div className='bg-light p-4 text-center'>
				<Dialog
					title='Modal Example'
					btnLabel='Open Modal'
					btnStyles='primary solid pill'
					modal={true}
				>
					<div>
						<p className='mb-0 text-xl'>
							The <code>dialog</code> element is a useful element for representing any
							kind of dialog in HTML.
						</p>
					</div>
				</Dialog>
			</div>

			<div className='mb-0'>
				<Codeblock language='jsx'>
					{`import { Button, Dialog } from '@/components'

<Dialog
	title='Dialog Title'
	message='The <code>dialog</code> element is a useful element for representing any
			kind of dialog in HTML.'
	btnLabel='Open Modal'
	btnStyles='primary solid pill'
	modal={true}
>
	<!-- Enter your html here -->
	<Button
		className='primary rounded outline'
		type='submit'
	>
		Agree
	</Button>
	<Button
		className='dark rounded outline'
		type='submit'
	>
		Cancel
	</Button>
	<!-- END: Enter your html here -->

</Dialog>`}
				</Codeblock>
			</div>

			<h2>Alerts</h2>

			<div className='bg-light p-4 text-center'>
				<Dialog
					btnLabel='Open Alert'
					btnStyles='info pill'
					modal={true}
				>
					<Alert
						className={`danger solid mb-0 mt-16 text-start`}
						status='Alert'
						message='An important message for the user.'
					/>
				</Dialog>
			</div>

			<div className='mb-0'>
				<Codeblock language='jsx'>
					{`import { Alert, Button, Dialog } from '@/components'
					
<Dialog
	btnLabel='Open Alert'
	btnStyles='info pill'
	modal={true}
>
	<Alert
		className={\`danger solid mb-0 mt-16 text-start\`}
		status='Alert'
		message='An important message for the user.'
	/>
</Dialog>
`}
				</Codeblock>
			</div>

			<hr />

			<h2>Examples</h2>

			<h3>Login</h3>

			<div className='bg-light p-4 text-center'>
				<Dialog
					title='Login'
					btnIcon={<UserIcon />}
					btnLabel='Login'
					btnStyles='icon circle outline dark lg !p-1'
					closeLabel='Cancel'
					modal={true}
					onSubmit={handleSubmit}
				>
					<Input
						label='Username'
						name='username'
						autocomplete='username'
						type='text'
						required={true}
						hint='Either Username or email address'
					/>

					<Input
						label='Password'
						name='password'
						autocomplete='current-password'
						type='password'
						required={true}
						pattern='(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}'
						hint='Must contain at least one number and one uppercase and lowercase letter, and at least 8 or more characters'
					/>
				</Dialog>
			</div>

			<div className='mb-12'>
				<Codeblock language='jsx'>
					{`import { Input, Dialog } from '@/components'
import { UserIcon } from '@heroicons/react/24/solid'

const handleSubmit = (e: any) => {
	const data = new FormData(e.target)
	console.log(Object.fromEntries(data.entries()))
}
					
<Dialog
	title='Login'
	btnIcon={<UserIcon />}
	btnStyles='icon circle outline dark lg p-1'
	closeLabel='Cancel'
	modal={true}
	onSubmit={handleSubmit}
>
	<Input
		label='Username'
		name='username'
		autocomplete='username'
		type='text'
		required={true}
		hint='Either Username or email address'
	/>

	<Input
		label='Password'
		name='password'
		autocomplete='current-password'
		type='password'
		required={true}
		pattern='(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}'
		hint='Must contain at least one number and one uppercase and lowercase letter, and at least 8 or more characters'
	/>
</Dialog>
`}
				</Codeblock>
			</div>

			<h3>Register</h3>

			<div className='bg-light p-4 text-center'>
				<Dialog
					title='Register'
					btnLabel='Register'
					btnStyles='link normal-case'
					closeLabel='Cancel'
					modal={true}
					onSubmit={handleSubmit}
				>
					<Input
						label='Email'
						name='email'
						autocomplete='email'
						type='email'
						required={true}
						hint='Enter a valid email address'
					/>

					<Input
						label='Password'
						name='password'
						autocomplete='new-password'
						type='password'
						required={true}
						onchange={handleChange}
						className='peer'
						pattern='(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}'
						hint='Must contain at least one number and one uppercase and lowercase letter, and at least 8 or more characters'
					/>

					<Input
						label='Confirm Password'
						name='confirmpassword'
						autocomplete='new-password'
						type='password'
						required={true}
						className='peer-invalid:hidden'
						pattern={password}
					/>
				</Dialog>
			</div>

			<div className='mb-12'>
				<Codeblock language='jsx'>
					{`import { Input, Dialog } from '@/components'

const [password, setPassword] = useState('')

const handleChange = (e: any) => {
	setPassword(e.target.value)
}
					
<Dialog
	title='Register'
	btnLabel='Register'
	btnStyles='link normal-case'
	closeLabel='Cancel'
	modal={true}
	onSubmit={handleSubmit}
>
	<Input
		label='Email'
		name='email'
		autocomplete='email'
		type='email'
		required={true}
		hint='Enter a valid email address'
	/>

	<Input
		label='Password'
		name='password'
		autocomplete='new-password'
		type='password'
		required={true}
		onchange={handleChange}
		className='peer'
		pattern='(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}'
		hint='Must contain at least one number and one uppercase and lowercase letter, and at least 8 or more characters'
	/>

	<Input
		label='Confirm Password'
		name='confirmpassword'
		autocomplete='new-password'
		type='password'
		required={true}
		className='peer-invalid:hidden'
		pattern={password}  // valid if the value equals 'password' input value
	/>
</Dialog>
`}
				</Codeblock>
			</div>
		</>
	)
}

export default DialogTemplate
