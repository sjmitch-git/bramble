'use client'

import React, { useState } from 'react'

import { Alert, Codeblock } from '@/components'

const AlertTemplate = () => {
	const [error, setError] = useState('Page could not be found!')

	return (
		<>
			<h2>Usage xx</h2>
			<div className='mb-0'>
				<Codeblock language='jsx'>
					{`import Alert from '@/components/alert'
                    
<Alert
    className='info' // 'info' | 'success' | 'warning' | 'error' | 'danger'
	status='info'
	message='Some contextual message useful to the user.' // can be HTML content
/>`}
				</Codeblock>
			</div>

			<div className='mx-auto mb-12'>
				<Alert
					className='info'
					status='Info'
					message="<p><strong>Ugh umami</strong> bacon butcher <a href='#'>pickled kogi</a> stumptown, <em>subway tile</em> gatekeep flexitarian. Bespoke meggings health goth meh ascot listicle, cronut vaporware.</p>"
				/>
			</div>

			<div className='mx-auto mb-12'>
				<Alert
					className='success'
					status='Success'
					message="<p><strong>Ugh umami</strong> bacon butcher <a href='#'>pickled kogi</a> stumptown, <em>subway tile</em> gatekeep flexitarian.</p> <p>Marfa church-key cred, kinfolk mlkshk tousled roof party XOXO readymade solarpunk tbh adaptogen.</p>"
				/>
			</div>

			<div className='mx-auto mb-12'>
				<Alert
					className='warning'
					status='Warning'
					message='Some contextual message useful to the user.'
				/>
			</div>

			<div className='mx-auto mb-12'>
				<Alert
					className='error'
					status='Error'
					message='Some contextual message useful to the user.'
				/>
			</div>

			<div className='mx-auto mb-12'>
				<Alert
					className='danger'
					message='Some contextual message useful to the user.'
				/>
			</div>

			<hr />

			<h2>Sizes</h2>

			<div className='mx-auto mb-12'>
				<Alert
					className='info sm'
					status='Small'
					message='Some contextual message useful to the user.'
				/>
			</div>

			<div className='mx-auto mb-12'>
				<Alert
					className='success lg'
					status='Large'
					message='Some contextual message useful to the user.'
				/>
			</div>
			<div className='mb-0'>
				<Codeblock language='jsx'>
					{`<Alert
    className='sm' // 'sm' | 'lg' | undefined
	...
/>`}
				</Codeblock>
			</div>

			<hr />

			<h2>Outline</h2>

			<div className='mx-auto mb-12'>
				<Alert
					className='info outline'
					status='Info'
					message='Form submission was successful!'
				/>
			</div>
			<div className='mb-0'>
				<Codeblock language='jsx'>
					{`<Alert
    className='info outline'
	...
/>`}
				</Codeblock>
			</div>

			<hr />

			<h2>Solid</h2>

			<div className='mx-auto mb-12'>
				<Alert
					className='info solid'
					status='Info'
					message='Form submission was successful!'
				/>
			</div>

			<div className='mx-auto mb-12'>
				<Alert
					className='warning solid lg'
					message='Form submission was successful!'
				/>
			</div>

			<div className='mx-auto mb-12'>
				<Alert
					className='success solid'
					status='Info'
					message='Form submission was successful!'
				/>
			</div>

			<div className='mb-0'>
				<Codeblock language='jsx'>
					{`<Alert
    className='info solid'
	...
/>`}
				</Codeblock>
			</div>

			<hr />

			<h2>Dismissible</h2>

			<div className='mx-auto mb-12'>
				{error && (
					<Alert
						className='error'
						status='404'
						message={error}
						onClick={() => setError('')}
					/>
				)}
			</div>

			<div className='mb-0'>
				<Codeblock language='jsx'>
					{`const [error, setError] = useState('Page could not be found!')
                    
{error && (
    <Alert
        className='error'
        status='404'
        message={error}
        onClick={() => setError('')}
    />
)}`}
				</Codeblock>
			</div>

			<hr />

			<h2>RTL</h2>

			<div
				className='mx-auto mb-12'
				dir='rtl'
			>
				{error && (
					<Alert
						className='error'
						status='404'
						message={error}
						onClick={() => setError('')}
					/>
				)}
			</div>

			<hr />
		</>
	)
}

export default AlertTemplate
