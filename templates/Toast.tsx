'use client'

import Link from 'next/link'

import UseToast from '@/hooks/useToast'

import { Codeblock, Button } from '@/components'

const ToastTemplate = () => {
	const [showToast] = UseToast()

	return (
		<>
			<h2>Examples</h2>

			<h3>Position</h3>

			<div className='mb-8 flex flex-wrap gap-4 border p-4'>
				<Button
					onClick={() =>
						showToast('top right', 'bg-white border text-dark', '"top right"')
					}
				>
					Top Right
				</Button>
				<Button onClick={() => showToast('middle right', 'info', '"middle right"')}>
					Middle Right
				</Button>
				<Button onClick={() => showToast('bottom right', 'info', '"bottom right"')}>
					Bottom Right
				</Button>
			</div>

			<div className='mb-8 flex flex-wrap gap-4 border p-4'>
				<Button onClick={() => showToast('top center', 'info', '"top center"')}>
					Top Center
				</Button>
				<Button onClick={() => showToast('middle center', 'info', '"middle center"')}>
					Middle Center
				</Button>
				<Button onClick={() => showToast('bottom center', 'info', '"bottom center"')}>
					Bottom Center
				</Button>
			</div>

			<div className='mb-8 flex flex-wrap gap-4 border p-4'>
				<Button onClick={() => showToast('top left', 'info', '"top left"')}>
					Top Left
				</Button>
				<Button onClick={() => showToast('middle left', 'info', '"middle left"')}>
					Middle Left
				</Button>
				<Button onClick={() => showToast('bottom left', 'info', '"bottom left"')}>
					Bottom Left
				</Button>
			</div>

			<h3>State</h3>

			<div className='mb-8 flex flex-wrap gap-4 border p-4'>
				<Button
					className='info'
					onClick={() => showToast('top right', 'info', '"info"')}
				>
					Info
				</Button>
				<Button
					className='success'
					onClick={() => showToast('top right', 'success', '"success"')}
				>
					Success
				</Button>
				<Button
					className='warning'
					onClick={() => showToast('top right', 'warning', '"warning"')}
				>
					Warning
				</Button>
				<Button
					className='error'
					onClick={() => showToast('top right', 'error', '"error"')}
				>
					Error
				</Button>
			</div>

			<h3>Message</h3>

			<h4>String</h4>

			<div className='mb-8 flex flex-wrap gap-4 border p-4'>
				<Button
					className='info'
					onClick={() => showToast('top right', 'info', 'Any message as string')}
				>
					String
				</Button>
			</div>

			<h4>Node</h4>

			<div className='mb-8 flex flex-wrap gap-4 border p-4'>
				<Button
					className='info'
					onClick={() =>
						showToast(
							'top right',
							'info',
							<>
								Message with ReactNode <Link href='/'>Link</Link>
							</>
						)
					}
				>
					Node
				</Button>
			</div>

			<h3>Autohide</h3>

			<p>
				Component will close automatically by default. Set <code>autohide</code> to{' '}
				<code>false</code> to disable.
			</p>

			<div className='mb-8 flex flex-wrap gap-4 border p-4'>
				<Button
					onClick={() => showToast('top center', 'success', '"middle center"', false)}
				>
					Disabled Autohide
				</Button>
			</div>

			<Codeblock language='jsx'>
				{`<Button
    onClick={() => showToast('top center', 'success', '"middle center"', false)}
>
    Disabled Autohide
</Button>`}
			</Codeblock>

			<hr />

			<h2>Usage</h2>

			<Codeblock language='jsx'>
				{`import UseToast from '@/hooks/useToast' // import custom hook

const [showToast] = UseToast()

// showToast(position, state, message, autohide)
// options:
// position X = 'top' | middle | 'bottom'
// position Y = 'left' | center | 'right'
// state = 'info' | 'success' | 'warning' | 'danger' || any Tailwind classes eg: 'bg-white border text-dark'
// message = string | React Node

<!-- POSITION -->
<Button onClick={() => showToast('top right', 'info', '"top right"')}>
    Top Right
</Button>
<Button onClick={() => showToast('middle right', 'info', '"middle right"')}>
    Middle Right
</Button>
<Button onClick={() => showToast('bottom right', 'info', '"bottom right"')}>
    Bottom Right
</Button>

<!-- STATE -->
<Button
    className='info'
    onClick={() => showToast('top right', 'info', '"info"')}
>
    Info
</Button>
<Button
    className='success'
    onClick={() => showToast('top right', 'success', '"success"')}
>
    Success
</Button>
<Button
    className='warning'
    onClick={() => showToast('top right', 'warning', '"warning"')}
>
    Warning
</Button>
<Button
    className='danger'
    onClick={() => showToast('top right', 'error', '"error"')}
>
    Error
</Button>

<!-- MESSAGE -->
<!-- string -->
<Button
    className='info'
    onClick={() => showToast('top right', 'info', 'Any message as string')}
>
    String
</Button>

<!-- node -->
<Button
    className='info'
    onClick={() =>
        showToast(
            'top right',
            'info',
            <>
                Message with ReactNode <Link href='/'>Link</Link>
            </>
        )
    }
>
    Node
</Button>
`}
			</Codeblock>

			<h2>Custom Hook</h2>

			<Codeblock language='jsx'>
				{`import { useContext } from 'react'
import { ToastContext } from '@/contexts/toast.context'

export default function useToast() {
	const { setShow, setState, setMessage, setPosition, setAutohide } = useContext(ToastContext)

	function showToast(
		position: string,
		state: string,
		message: React.ReactNode,
		autohide: boolean = true
	) {
		setShow(true)
		setMessage(message)
		setState(state)
		setPosition(position)
		setAutohide(autohide)
	}

	return [showToast]
}
`}
			</Codeblock>
		</>
	)
}

export default ToastTemplate
