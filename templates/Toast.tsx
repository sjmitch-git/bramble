'use client'

import UseToast from '@/hooks/useToast'

import { Codeblock, Button, Spinner } from '@/ui'
import { useEffect, useState } from 'react'

const ToastTemplate = () => {
	const { showToast, closeToast } = UseToast()
	const [loading, setLoading] = useState(false)

	useEffect(() => {
		if (loading) {
			showToast(
				'center middle',
				'',
				<>
					<Spinner className='w-24 rounded-full bg-warning p-0' />
				</>,
				false
			)
		} else {
			closeToast()
		}
	}, [loading])

	return (
		<>
			<h2>Import</h2>

			<Codeblock language='jsx'>
				{`import UseToast from '@/hooks/useToast' // import custom hook

const [showToast] = UseToast()
`}
			</Codeblock>

			<h2>Examples</h2>

			<h3>Position</h3>

			<div className='mb-8 flex flex-wrap gap-4 border p-4'>
				<Button onClick={() => showToast('top right', 'info', '"top right"', true)}>
					Top Right
				</Button>
				<Button onClick={() => showToast('middle center', 'info', '"middle center"', true)}>
					Middle Center
				</Button>
				<Button onClick={() => showToast('bottom left', 'info', '"bottom left"', true)}>
					Bottom Left
				</Button>
			</div>

			<Codeblock language='jsx'>
				{`// showToast(position, state, message, autohide)

// POSITION OPTIONS
// position Y = 'top' | middle | 'bottom'
// position X = 'left' | center | 'right'

<!-- examples -->
<Button onClick={() => showToast('top right', 'info', '"top right"', true)}>
	Top Right
</Button>
<Button onClick={() => showToast('middle center', 'info', '"middle center"', true)}>
	Middle Center
</Button>
<Button onClick={() => showToast('bottom left', 'info', '"bottom left"', true)}>
	Bottom Left
</Button>
`}
			</Codeblock>
			<h3>State</h3>
			<div className='mb-8 flex flex-wrap gap-4 border p-4'>
				<Button
					className='info'
					onClick={() => showToast('middle center', 'info', '"info"', true)}
				>
					Info
				</Button>
				<Button
					className='success'
					onClick={() => showToast('middle center', 'success', '"success"', true)}
				>
					Success
				</Button>
				<Button
					className='warning'
					onClick={() => showToast('middle center', 'warning', '"warning"', true)}
				>
					Warning
				</Button>
				<Button
					className='error'
					onClick={() => showToast('middle center', 'error', '"error"', true)}
				>
					Error
				</Button>
				<Button
					className='error outline'
					onClick={() =>
						showToast(
							'middle center',
							'bg-white border-2 border-error text-error',
							'"custom"',
							true
						)
					}
				>
					Custom
				</Button>
			</div>
			<Codeblock language='jsx'>
				{`// showToast(position, state, message, autohide)
				
// STATE OPTIONS
// state = 'info' | 'success' | 'warning' | 'danger' || any Tailwind classes eg: 'bg-white border text-dark'


<!-- STATE -->
<Button
    className='info'
    onClick={() => showToast('middle center', 'info', '"info"')}
>
    Info
</Button>
<Button
    className='success'
    onClick={() => showToast('middle center', 'success', '"success"')}
>
    Success
</Button>
<Button
    className='warning'
    onClick={() => showToast('middle center', 'warning', '"warning"')}
>
    Warning
</Button>
<Button
    className='danger'
    onClick={() => showToast('middle center', 'error', '"error"')}
>
    Error
</Button>
<Button
	className='error outline'
	onClick={() =>
		showToast('middle center', 'bg-white border-2 border-error text-error', '"custom"', true)
	}
>
	Custom
</Button>
`}
			</Codeblock>
			<h3>Message</h3>
			<p>Message may be either a string or node/html content.</p>
			<h4>String</h4>
			<div className='mb-8 flex flex-wrap gap-4 border p-4'>
				<Button
					className='info'
					onClick={() =>
						showToast('middle right', 'info', 'Any message as string', false)
					}
				>
					String
				</Button>
			</div>
			<Codeblock language='jsx'>
				{`<Button
	className='info'
	onClick={() =>
		showToast(
			'middle right',
			'info',
			'Any message as string',
			false
		)
	}
>
	String
</Button>`}
			</Codeblock>
			<h4>Node</h4>
			<div className='mb-8 flex flex-wrap gap-4 border p-4'>
				<Button
					className='info'
					onClick={() => setLoading(!loading)}
				>
					Toggle Loading
				</Button>
			</div>
			<Codeblock language='jsx'>
				{`import { Spinner } from '@/ui'
				
<Button
	className='info'
	onClick={() =>
		showToast( 
			'center middle', 
			'',
			<Spinner className='w-24 rounded-full bg-warning p-0' />, 
			false
		)
	}
>
	Loading
</Button>`}
			</Codeblock>

			<h3>Dismissable</h3>
			<p>
				Set <code>autohide</code> to <code>false</code> to disable autohide. Add{' '}
				<code>dismissable</code> class to add a close button.
			</p>
			<div className='mb-8 flex flex-wrap gap-4 border p-4'>
				<Button
					className='info'
					onClick={() =>
						showToast(
							'middle right',
							'info dismissable',
							'This Toast has a close button',
							false
						)
					}
				>
					Dismissable
				</Button>
			</div>
			<Codeblock language='jsx'>
				{`<Button
	className='info'
	onClick={() =>
		showToast(
			'middle right',
			'info dismissable',
			'This Toast has a close button',
			false
		)
	}
>
	Dismissable
</Button>`}
			</Codeblock>
		</>
	)
}

export default ToastTemplate
