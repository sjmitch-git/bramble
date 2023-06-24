'use client'

import React, { useState } from 'react'

import Dialog from '@/components/dialog'
import Button from '@/components/button'
import Codeblock from '@/components/codeblock'

const DialogTemplate = () => {
	return (
		<>
			<h2>Usage</h2>
			<div className='mb-0'>
				<Codeblock language='jsx'>
					{`import Dialog from '@/components/dialog'
                    
<Dialog
    open={false}         // FALSE by default
	addOpenButton={true} // TRUE by default
    btnLabel='Open the dialog component!' // // Set label text for 'addOpenButton'
    btnStyles='link'     // Style 'addOpenButton'
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
                styles='outline rounded primary'
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

			<div className='bg-light p-4 text-center'>
				<Dialog
					btnLabel='Open the dialog component!'
					btnStyles='link'
				>
					<form method='dialog'>
						<h2>Dialog</h2>
						<p>
							The <code>dialog</code> element is a useful element for representing any
							kind of dialog in HTML.
						</p>
						<div className='flex justify-center'>
							<Button
								styles='outline rounded primary'
								type='submit'
							>
								OK
							</Button>
						</div>
					</form>
				</Dialog>
			</div>
		</>
	)
}

export default DialogTemplate
