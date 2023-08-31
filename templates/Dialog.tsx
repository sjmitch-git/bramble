'use client'

import { useState } from 'react'

import { Alert, Codeblock, Dialog, Button, Tabs } from '@/ui'
import { Login, Register } from '@/features'
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
			<h2>Modal</h2>

			<div className='bg-light p-4 text-center'>
				<Dialog
					title='Modal Example'
					btnLabel='Open Modal'
					btnStyles='primary solid pill'
					addForm={true}
				>
					<div>
						<p className='mb-0 text-xl'>
							The <code>dialog</code> element is a useful element for representing any
							kind of dialog in HTML.
						</p>
						<div className='actions'>
							<Button
								className='dark rounded outline'
								type='submit'
							>
								OK!
							</Button>
						</div>
					</div>
				</Dialog>
			</div>

			<div className='mb-0'>
				<Codeblock language='jsx'>
					{`import { Button, Dialog } from '@/ui'

<Dialog
	title='Modal Example'
	btnLabel='Open Modal'
	btnStyles='primary solid pill'
	addForm={true}
>
	<div>
		<p className='mb-0 text-xl'>
			The <code>dialog</code> element is a useful element for representing any
			kind of dialog in HTML.
		</p>
		<div className='actions'>
			<Button
				className='dark rounded outline'
				type='submit'
			>
				OK!
			</Button>
		</div>
	</div>
</Dialog>`}
				</Codeblock>
			</div>

			<h2>Alerts</h2>

			<div className='bg-light p-4 text-center'>
				<Dialog
					btnLabel='Open Alert'
					btnStyles='info pill'
					addForm={true}
				>
					<Alert
						className={`danger solid mb-0 mt-16 text-start`}
						status='Alert'
						message='An important message for the user.'
					/>
					<div className='actions'>
						<Button
							className='dark rounded outline'
							type='submit'
						>
							OK!
						</Button>
					</div>
				</Dialog>
			</div>

			<div className='mb-0'>
				<Codeblock language='jsx'>
					{`import { Alert, Button, Dialog } from '@/ui'
					
<Dialog
	btnLabel='Open Alert'
	btnStyles='info pill'
	addForm={true}
>
	<Alert
		className={\`danger solid mb-0 mt-16 text-start\`}
		status='Alert'
		message='An important message for the user.'
	/>
	<div className='actions'>
		<Button
			className='dark rounded outline'
			type='submit'
		>
			OK!
		</Button>
	</div>
</Dialog>
`}
				</Codeblock>
			</div>

			<hr />

			<h2>Examples</h2>

			<h3>Login / Register</h3>

			<div className='mb-4 bg-light p-4 text-center'>
				<Dialog
					title='Login / Regsiter'
					btnLabel='Login / Register'
					btnStyles='outline dark'
				>
					<Tabs
						className='w-full pt-12'
						defaultActiveId='LogIn'
					>
						<div
							id='LogIn'
							title='Log In'
							className='active'
						>
							<Login
								method='dialog'
								onSubmit={handleSubmit}
							/>
						</div>
						<div
							id='SignUp'
							title='Sign Up'
						>
							<Register
								method='dialog'
								onSubmit={handleSubmit}
							/>
						</div>
					</Tabs>
				</Dialog>
			</div>
			<div className='mb-12'>
				<Codeblock language='jsx'>
					{`import { Dialog } from '@/ui'
import { Login, Register } from '@/features'

const handleSubmit = (e: any) => {
	const data = new FormData(e.target)
	console.log(Object.fromEntries(data.entries()))
}
					
<Dialog
	title='Login / Regsiter'
	btnLabel='Login / Register'
	btnStyles='outline dark'
>
	<Tabs
		className='w-full pt-12'
		defaultActiveId='LogIn'
	>
		<div
			id='LogIn'
			title='Log In'
			className='active'
		>
			<Login
				method='dialog'
				onSubmit={handleSubmit}
			/>
		</div>
		<div
			id='SignUp'
			title='Sign Up'
		>
			<Register
				method='dialog'
				onSubmit={handleSubmit}
			/>
		</div>
	</Tabs>
</Dialog>
`}
				</Codeblock>
			</div>

			<h3>Login</h3>

			<div className='bg-light p-4 text-center'>
				<Dialog
					title='Login'
					btnIcon={<UserIcon />}
					btnLabel='Login'
					btnStyles='icon circle outline dark lg !p-1'
				>
					<Login
						method='dialog'
						onSubmit={handleSubmit}
					/>
				</Dialog>
			</div>

			<div className='mb-12'>
				<Codeblock language='jsx'>
					{`import { Dialog } from '@/ui'
import { Login } from '@/features'
import { UserIcon } from '@heroicons/react/24/solid'

const handleSubmit = (e: any) => {
	const data = new FormData(e.target)
	console.log(Object.fromEntries(data.entries()))
}
					
<Dialog
	title='Login'
	btnIcon={<UserIcon />}
	btnLabel='Login'
	btnStyles='icon circle outline dark lg !p-1'
>
	<Login
		method='dialog'
		onSubmit={handleSubmit}
	/>
</Dialog>
`}
				</Codeblock>
			</div>

			<h3>Register</h3>

			<div className='bg-light p-4 text-center'>
				<Dialog
					title='Sign Up'
					btnLabel='Sign Up'
					btnStyles='link normal-case'
				>
					<Register
						method='dialog'
						onSubmit={handleSubmit}
					/>
				</Dialog>
			</div>

			<div className='mb-12'>
				<Codeblock language='jsx'>
					{`import { Dialog } from '@/ui'
import { Register } from '@/features'

const handleSubmit = (e: any) => {
	const data = new FormData(e.target)
	console.log(Object.fromEntries(data.entries()))
}
					
<Dialog
	title='Sign Up'
	btnLabel='Sign Up'
	btnStyles='link normal-case'
>
	<Register
		method='dialog'
		onSubmit={handleSubmit}
	/>
</Dialog>
`}
				</Codeblock>
			</div>
		</>
	)
}

export default DialogTemplate
