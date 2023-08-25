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
					onClick={() => showToast('top right', 'info', '"info"', true)}
				>
					Info
				</Button>
				<Button
					className='success'
					onClick={() => showToast('top right', 'success', '"success"', true)}
				>
					Success
				</Button>
				<Button
					className='warning'
					onClick={() => showToast('top right', 'warning', '"warning"', true)}
				>
					Warning
				</Button>
				<Button
					className='error'
					onClick={() => showToast('top right', 'error', '"error"', true)}
				>
					Error
				</Button>
				<Button
					className='error outline'
					onClick={() =>
						showToast(
							'top right',
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
<Button
	className='error outline'
	onClick={() =>
		showToast('top right', 'bg-white border-2 border-error text-error', '"custom"', true)
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
					Loading
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

			<hr />

			<h2>Toast Context</h2>
			<Codeblock language='jsx'>
				{`import { createContext } from 'react'

interface ToastContextProps {
	state: string
	setState: (state: string) => void
	message: React.ReactNode
	setMessage: (message: React.ReactNode) => void
	position: string
	setPosition: (position: string) => void
	show: boolean
	setShow: (show: boolean) => void
	autohide: boolean
	setAutohide: (fadeout: boolean) => void
}

const initialState: ToastContextProps = {
	state: '',
	setState: () => {},
	message: '',
	setMessage: () => {},
	position: '',
	setPosition: () => {},
	show: false,
	setShow: () => {},
	autohide: false,
	setAutohide: () => {},
}

export const ToastContext = createContext<ToastContextProps>(initialState)

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
		autohide: boolean
	) {
		setMessage(message)
		setState(state)
		setPosition(position)
		setAutohide(autohide)
		setShow(true)
	}

	function closeToast() {
		setShow(false)
	}

	return { showToast, closeToast }
}
`}
			</Codeblock>

			<h2>Toast Context Provider</h2>
			<Codeblock language='jsx'>
				{`'use client'

import { useContext, useState } from 'react'
import { ToastContext } from '@/contexts/toast.context'
import { Toast } from '@/ui'

export default function ToastContextProvider({ children }: { children: React.ReactNode }) {
	const initialState = useContext(ToastContext)
	const [show, setShow] = useState(initialState.show)
	const [message, setMessage] = useState(initialState.message)
	const [state, setState] = useState(initialState.state)
	const [position, setPosition] = useState(initialState.position)
	const [autohide, setAutohide] = useState(initialState.autohide)
	const contextValues = {
		message,
		setMessage,
		show,
		setShow,
		state,
		setState,
		position,
		setPosition,
		autohide,
		setAutohide,
	}
	return (
		<ToastContext.Provider value={contextValues}>
			{children}
			<Toast />
		</ToastContext.Provider>
	)
}
`}
			</Codeblock>
		</>
	)
}

export default ToastTemplate
