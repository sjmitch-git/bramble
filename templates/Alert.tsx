'use client'

import React, { useState } from 'react'

import Alert from '@/components/alert'
import Button from '@/components/button'
import Codeblock from '@/components/codeblock'

const AlertTemplate = () => {
	const [error, setError] = useState('Page could not be found!')

	const handleClick = () => {
		alert('You clicked me!')
	}

	return (
		<>
			<h2>Usage</h2>
			<div className='mb-0'>
				<Codeblock language='jsx'>
					{`import Alert from '@/components/alert'
                    
<Alert
    styles='info' // 'info' | 'success' | 'warning' | 'error' | 'danger'
	status='info'
	message='Some contextual message useful to the user.' // can be HTML content
/>`}
				</Codeblock>
			</div>

			<div className='mx-auto mb-12'>
				<Alert
					styles='info'
					status='Info'
					message="<p><strong>Ugh umami</strong> butcher <a href='#'>pickled kogi</a> stumptown, <em>subway tile</em> gatekeep flexitarian. Bespoke meggings health goth meh ascot listicle, cronut vaporware. Marfa church-key cred, kinfolk mlkshk tousled roof party XOXO readymade solarpunk tbh adaptogen. Raclette williamsburg chicharrones, +1 retro hashtag freegan sustainable tumblr polaroid deep v tote bag godard.</p>"
				/>
			</div>

			<div className='mx-auto mb-12'>
				<Alert
					styles='success'
					status='Success'
					message='<p>Raclette williamsburg chicharrones, +1 retro hashtag freegan sustainable tumblr polaroid deep v tote bag godard<p>'
				/>
			</div>

			<div className='mx-auto mb-12'>
				<Alert
					styles='warning'
					status='Warning'
					message='Some contextual message useful to the user.'
				/>
			</div>

			<div className='mx-auto mb-12'>
				<Alert
					styles='error'
					status='Error'
					message='Some contextual message useful to the user.'
				/>
			</div>

			<div className='mx-auto mb-12'>
				<Alert
					styles='danger'
					message='Some contextual message useful to the user.'
				/>
			</div>

			<hr />

			<h2>Sizes</h2>

			<div className='mx-auto mb-12'>
				<Alert
					styles='info sm'
					status='Small'
					message='Some contextual message useful to the user.'
				/>
			</div>

			<div className='mx-auto mb-12'>
				<Alert
					styles='success lg'
					status='Large'
					message='Some contextual message useful to the user.'
				/>
			</div>
			<div className='mb-0'>
				<Codeblock language='jsx'>
					{`<Alert
    styles='sm' // 'sm' | 'lg' | undefined
	...
/>`}
				</Codeblock>
			</div>

			<hr />

			<h2>Outline</h2>

			<div className='mx-auto mb-12'>
				<Alert
					styles='info outline'
					status='Info'
					message='Form submission was successful!'
				/>
			</div>
			<div className='mb-0'>
				<Codeblock language='jsx'>
					{`<Alert
    styles='info outline'
	...
/>`}
				</Codeblock>
			</div>

			<hr />

			<h2>Solid</h2>

			<div className='mx-auto mb-12'>
				<Alert
					styles='info solid'
					status='Info'
					message='Form submission was successful!'
				/>
			</div>

			<div className='mx-auto mb-12'>
				<Alert
					styles='warning solid lg'
					message='Form submission was successful!'
				/>
			</div>

			<div className='mx-auto mb-12'>
				<Alert
					styles='success solid'
					status='Info'
					message='Form submission was successful!'
				/>
			</div>

			<div className='mb-0'>
				<Codeblock language='jsx'>
					{`<Alert
    styles='info solid'
	...
/>`}
				</Codeblock>
			</div>

			<hr />

			<h2>Dismissible</h2>

			<div className='mx-auto mb-12'>
				{error && (
					<Alert
						styles='error'
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
        styles='error'
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
						styles='error'
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
