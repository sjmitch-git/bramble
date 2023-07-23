import { Alert, Button, Codeblock, Dialog } from '@/components'

const DialogTemplate = () => {
	return (
		<>
			<h2>Basic</h2>
			<div className='h-80 bg-neutral p-4 text-center'>
				<Dialog
					title='Dialog Title'
					message='The <code>dialog</code> element is a useful element for representing any
			kind of dialog in HTML.'
					addOpenButton={false}
					open={true}
				>
					<Button className='primary rounded outline'>OK</Button>
				</Dialog>
			</div>

			<h2>Modal</h2>

			<div className='bg-light p-4 text-center'>
				<Dialog
					title='Dialog Title'
					message='The <code>dialog</code> element is a useful element for representing any
			kind of dialog in HTML.'
					btnLabel='Open Modal'
					btnStyles='primary solid pill'
					modal={true}
				>
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
				</Dialog>
			</div>

			<div className='mb-0'>
				<Codeblock language='jsx'>
					{`import Dialog from '@/components/dialog'
import Button from '@/components/button'

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
					node={
						<Alert
							className={`danger solid mb-8 mt-12 text-start`}
							status='Alert'
							message='Components can be passed as a <code>node</code> prop'
						/>
					}
					btnLabel='Open Alert'
					btnStyles='info pill'
					modal={true}
				>
					<Button
						className='dark rounded outline'
						type='submit'
					>
						OK
					</Button>
				</Dialog>
			</div>

			<div className='mb-0'>
				<Codeblock language='jsx'>
					{`import Dialog from '@/components/dialog'
import Button from '@/components/button'
import Alert from '@/components/alert'
					
<Dialog
	node={
		<Alert
			className='danger solid mb-8 mt-12 text-start'
			status='Alert'
			message='Components can be passed as a <code>node</code> prop'
		/>
	}
	btnLabel='Open Alert'
	btnStyles='info pill'
	modal={true}
>
	<!-- Enter your html here -->
	<Button
		className='dark rounded outline'
		type='submit'
	>
		OK
	</Button>
	<!-- END: Enter your html here -->

</Dialog>
`}
				</Codeblock>
			</div>
			<hr />
		</>
	)
}

export default DialogTemplate
