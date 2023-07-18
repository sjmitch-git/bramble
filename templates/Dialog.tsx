'use client'

import React, { useState } from 'react'

import Dialog from '@/components/dialog'
import Button from '@/components/button'
import Codeblock from '@/components/codeblock'
import Alert from '@/components/alert'

const DialogTemplate = () => {
	return (
		<>
			<h2>Usage</h2>

			<div className='mb-8'>
				<Codeblock language='jsx'>
					{`import Dialog from '@/components/dialog'
                    
<Dialog
    open={false}         	// FALSE by default
	modal={false}         	// FALSE by default
	addOpenButton={true} 	// TRUE by default
    btnLabel='Open Dialog' 	// Set label text for 'addOpenButton'
    btnclassName='link'     	// Style 'addOpenButton'
>
    <!-- Enter your html here -->
    <form method='dialog'>
        <h2>Dialog</h2>
        <p>
            The <code>dialog</code> element is a useful element for representing any
            kind of dialog in HTML.
        </p>
        <div className='flex justify-center'>
            <Button
                className='outline rounded primary'
                type='submit'
            >
                OK
            </Button>
        </div>
    </form>
    <!-- END: Enter your html here -->
</Dialog>`}
				</Codeblock>
			</div>

			<h2>Basic</h2>
			<div className='h-80 bg-light p-4 text-center'>
				<Dialog
					addOpenButton={false}
					open={true}
				>
					<form method='dialog'>
						<h2>Dialog</h2>
						<p>
							The <code>dialog</code> element is a useful element for representing any
							kind of dialog in HTML.
						</p>
						<div className='flex justify-center'>
							<Button
								className='primary rounded outline'
								type='submit'
							>
								OK
							</Button>
						</div>
					</form>
				</Dialog>
			</div>

			<div className='mb-8'>
				<Codeblock language='jsx'>
					{`<Dialog
	...
    addOpenButton={false}
	open={true}
	...`}
				</Codeblock>
			</div>

			<h2>Modal</h2>

			<div className='bg-light p-4 text-center'>
				<Dialog
					btnLabel='Open Modal'
					btnclassName='link'
					modal={true}
				>
					<form method='dialog'>
						<h2>Dialog</h2>
						<p>
							The <code>dialog</code> element is a useful element for representing any
							kind of dialog in HTML.
						</p>
						<div className='flex justify-center'>
							<Button
								className='primary rounded outline'
								type='submit'
							>
								OK
							</Button>
						</div>
					</form>
				</Dialog>
			</div>

			<div className='mb-0'>
				<Codeblock language='jsx'>
					{`<Dialog
	...
    modal={true}
	...
`}
				</Codeblock>
			</div>

			<h2>Alerts</h2>

			<div className='bg-light p-4 text-center'>
				<Dialog
					btnLabel='Open Alert'
					btnclassName='info pill'
					modal={true}
				>
					<form method='dialog'>
						<Alert
							className='info solid mb-8 text-start'
							status='info'
							message='Some contextual message useful to the user.'
						/>

						<div className='flex justify-center'>
							<Button
								className='info rounded outline'
								type='submit'
							>
								OK
							</Button>
						</div>
					</form>
				</Dialog>
			</div>

			<div className='mb-0'>
				<Codeblock language='jsx'>
					{`import Dialog from '@/components/dialog'
import Button from '@/components/button'
import Alert from '@/components/alert'
					
<Dialog
	btnLabel='Open Alert'
	btnclassName='info pill'
	modal={true}
>
	<form method='dialog'>
		<Alert
			className='info solid text-start mb-8'
			status='info'
			message='Some contextual message useful to the user.'
		/>

		<div className='flex justify-center'>
			<Button
				className='outline rounded info'
				type='submit'
			>
				OK
			</Button>
		</div>
	</form>
</Dialog>
`}
				</Codeblock>
			</div>
		</>
	)
}

export default DialogTemplate
